import { User } from 'oidc-client-ts';
import React, { ReactElement } from 'react';
import { useUser } from './user-manager';

export function ProtectedRoute({ render }: { render: (user: User | null, uri: string) => ReactElement }) {
  const pathname = typeof location !== 'undefined' ? location?.pathname : null;
  const { loading, user } = useUser();

  return loading ? <div>Loading...</div> : render((!user?.expired && user) || null, `${encodeURI(pathname ?? '')}`);
}

export function useProtectedRoute() {
  const pathname = typeof location !== 'undefined' ? location?.pathname : null;
  const { loading, user } = useUser();

  return { loading, user, pathname };
}
