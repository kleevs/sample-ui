import React, { useCallback, useState } from 'react';
import { useUserManager } from './user-manager';
import { Button, Input, Panel } from "@packages/design-system";

export function Signin({ redirectUrl, appName }: { redirectUrl: string; appName: string }) {
  const userManager = useUserManager();
  const signin = useCallback(() => {
    userManager?.signinRedirect({ state: { redirectUrl } });
  }, [userManager, redirectUrl]);

  return (
    <div className="flex bg-gray-050 h-full w-full items-center justify-center">
      <div className="flex flex-col gap-8 py-12 px-24 rounded-xl backdrop-blur-xl">
        <h3 className="m-0 text-white">{appName}</h3>
        <Button onClick={signin}>
          Se connecter
        </Button>
      </div>
    </div>
  );
}

export function Login() {
  const [data, setData] = useState({ login: '', password: ''});
  const submitForm = (e: any) => {
    e.preventDefault();
    fetch("/oauth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
  }

  return <Panel title='Login'>
    <form onSubmit={submitForm}>
        <label>Login</label> <Input name="login" value={data.login} onChange={e => setData({...data, login: e.target.value})} />
        <label>Password</label> <Input name="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} />
        <input type="submit" />
    </form>
  </Panel>
}