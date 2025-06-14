import React, { useState, useMemo } from "react";

type UserProps =  DesignSystem.Props<'Input' | 'Panel' | 'PageLayout' | 'Button'> & {
    saveUser: (user: UserType) => Promise<void>;
}

export type UserType = {
    email: string;
    lastName: string;
    firstName: string;
    role: string;
    languages: string;
    available: boolean;
    projects: string[];
};

const DefaultUser = { email: 'claire.dubois@company.fr', lastName: "Dubois", firstName: 'Claire', role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] };

export function User({ Input, Panel, PageLayout, Button, saveUser, ...props }: UserProps) {
    const [user, setUser] = useState<UserType>(DefaultUser);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(e.target, { name, value })
        setUser(prev => ({ ...prev, [name]: value ?? '' }));
    };

    const action = useMemo(() => <>
        <Button onClick={() => saveUser(user)} >{"💾 Sauvegarder"}</Button>
    </>, []);

    return <PageLayout {...props} action={action}>
        <Panel title="✏️ Informations sur l'utilisateur">
            <Input name="firstName" value={user.firstName} onChange={handleInputChange} placeholder="Nom" />
            <Input name="lastName" value={user.lastName} onChange={handleInputChange} placeholder="Prénom" />
            <Input name="email" value={user.email} onChange={handleInputChange} placeholder="email" />
            <Input name="role" value={user.role} onChange={handleInputChange} placeholder="role" />
            <Input name="languages" value={user.languages} onChange={handleInputChange} placeholder="Languee parlées" />
        </Panel>
  </PageLayout>
}
