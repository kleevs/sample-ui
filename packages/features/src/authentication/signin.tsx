import React, { useCallback } from 'react';
import { useUserManager } from './user-manager';
import { Button } from "@packages/design-system";

export function Signin({ redirectUrl }: { redirectUrl: string; }) {
  const userManager = useUserManager();
  const signin = useCallback(() => {
    userManager?.signinRedirect({ state: { redirectUrl } });
  }, [userManager, redirectUrl]);

  return (
    <div className="flex bg-gray-050 h-full w-full items-center justify-center">
      <div className="flex flex-col gap-8 py-12 px-24 rounded-xl backdrop-blur-xl">
        <Button onClick={signin}>
          Se connecter
        </Button>
      </div>
    </div>
  );
}