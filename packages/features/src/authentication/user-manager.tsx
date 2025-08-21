import React, { createContext, useContext, ReactElement, useCallback, useState, useEffect, FC, useMemo, ReactNode } from 'react';
import { UserManager, WebStorageStateStore, User } from 'oidc-client-ts';

const UserManagerContext = createContext<UserManager | null | undefined>(null);

export function createUserManager(authority: string, clientId: string, redirectUri: string, postLogoutRedirectUri?: string) {
  const self = typeof window !== 'undefined' ? window : null;
  const baseUrl = typeof window !== 'undefined' && typeof location !== 'undefined' ? location.origin : null;
  return !self
    ? null
    : new UserManager({
        authority: authority,
        client_id: clientId,
        redirect_uri: `${baseUrl}${redirectUri}`,
        scope: 'allatclaims',
        response_type: 'code',
        post_logout_redirect_uri: postLogoutRedirectUri,
        stateStore: new WebStorageStateStore({
          store: self?.localStorage,
          prefix: 'oidc_'
        }),
        userStore: new WebStorageStateStore({
          store: self?.localStorage,
          prefix: 'oidc_'
        }),
        automaticSilentRenew: true,
        loadUserInfo: false
      });
}

export function UserManagerProvider({ authority, clientId, redirectUri, postLogoutRedirectUri, children }: {
  children?: ReactNode;
  authority: string;
  clientId: string; 
  redirectUri: string;
  postLogoutRedirectUri?: string
}) {
  const userManager = useMemo(() => createUserManager(authority, clientId, redirectUri, postLogoutRedirectUri), [authority, clientId, redirectUri, postLogoutRedirectUri]);
  return <UserManagerContext.Provider value={userManager}>{children}</UserManagerContext.Provider>;
}

export function useUserManager() {
  return useContext(UserManagerContext);
}

export function useAccessToken() {
  const userManager = useContext(UserManagerContext);
  return useCallback(async () => extractAccessToken((await userManager?.getUser())?.access_token || ''), [extractAccessToken, userManager]);
}

export function useUserLoaded(callback: (u: User) => void) {
  const userManager = useUserManager();
  useEffect(() => {
      if (userManager) {
          userManager.events.addUserLoaded(callback);
          return () => {
              userManager.events.removeUserLoaded(callback);
          }
      }
  }, [userManager]);
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const userManager = useUserManager();
  useUserLoaded(setUser);
  useEffect(() => {
      userManager?.getUser().then(u => {
          setUser(u);
          setLoading(false);
      });
  }, [userManager]);

  return { loading, user };
}

function extractAccessToken(token: string = '') {
  try {
    // TODO: some accounts have subtokens that need to be used instead. Investigate on it
    const resultToken = (JSON.parse(atob(token)) as { access_token: string }).access_token;
    return resultToken || token;
  } catch (e) {
    return token;
  }
}