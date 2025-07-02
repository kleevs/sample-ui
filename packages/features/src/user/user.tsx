import { Button, Input, Panel } from "@packages/design-system";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

type UserProps =  Features.AsProps<'AppLayout'> & Features.Props<'User'>;
type UserType = Features.UserType;

function useStateAsync<T>(defaultValue: T) {
  const state = useState<T>(defaultValue);

  useEffect(() => {
    state[1](defaultValue);
  }, [defaultValue]);

  return state;
}

const DefaultUser = { email: 'claire.dubois@company.fr', lastName: "Dubois", firstName: 'Claire', role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] };

export function User({ AppLayout, email, saveUser, getUser, ...props }: UserProps) {
    const { data: init = DefaultUser} = useQuery({ queryKey: ['user', email], queryFn: () => getUser(email) });
    const [user, setUser] = useStateAsync<UserType>(init);

    return <AppLayout {...props} action={<><Button onClick={() => saveUser(user)} >💾 Sauvegarder</Button></>}>
        <Panel title="✏️ Informations sur l'utilisateur">
            <Input name="firstName" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} placeholder="Nom" />
            <Input name="lastName" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} placeholder="Prénom" />
            <Input name="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email" />
            <Input name="role" value={user.role} onChange={(e) => setUser({...user, role: e.target.value})} placeholder="role" />
            <Input name="languages" value={user.languages} onChange={(e) => setUser({...user, languages: e.target.value})} placeholder="Languee parlées" />
        </Panel>
  </AppLayout>
}
