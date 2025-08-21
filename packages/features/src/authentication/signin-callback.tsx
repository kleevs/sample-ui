import React, { useEffect } from 'react';
import { useUserManager } from './user-manager';

type UserManagerState = {
  redirectUrl: string;
  data: number;
};

export function SigninCallback({ navigate }: { navigate: (url: string) => void }) {
  const userManager = useUserManager();

  useEffect(() => {
    userManager
      ?.signinCallback()
      .then((user) => (user?.state ? navigate((user.state as UserManagerState).redirectUrl) : null))
      .catch((e) => {
        console.error(e);
      });
  }, [navigate, userManager]);

  return <></>;
}
