import React, { useEffect } from 'react';
import { useUserManager } from './user-manager';

export function SigninCallback({ navigate }: { navigate: (url: string) => void }) {
  const userManager = useUserManager();

  useEffect(() => {
    userManager
      ?.signinCallback()
      .then((user) => {
        const redirectUrl = (user?.state as any)?.redirectUrl;
        if (redirectUrl) {
          navigate(redirectUrl);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [navigate, userManager]);

  return <></>;
}
