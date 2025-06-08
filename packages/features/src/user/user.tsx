import React, { useState, FC, useMemo } from "react";
import { Input } from '@design-system/components';

type UserType = {
    email: string;
    lastName: string;
    firstName: string;
    role: string;
    languages: string;
    available: boolean;
    projects: string[];
};

type UserProps = {
  PageLayout: FC<PageLayoutProps>
}

const DefaultUser = { email: '', lastName: "Dubois", firstName: 'Claire', role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] };

export function User({ PageLayout }: UserProps) {
    const [user, setUser] = useState<UserType>(DefaultUser);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(e.target, { name, value })
        setUser(prev => ({ ...prev, [name]: value ?? '' }));
    };

    const action = useMemo(() => <>
        <button
            onClick={() => {}}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
            >{"💾 Sauvegarder"}</button>
    </>, []);

  return <PageLayout action={action}>
    <div className="mb-10 bg-gray-50 dark:bg-gray-800 border shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">✏️ Informations sur l'utilisateur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="firstName" value={user.firstName} onChange={handleInputChange} placeholder="Nom" />
          <k-input  name="lastName" value={user.lastName} onChange={handleInputChange} placeholder="Prénom" />
          <k-input  name="email" value={user.email} onChange={handleInputChange} placeholder="email" />
          <k-input  name="role" value={user.role} onChange={handleInputChange} placeholder="role" />
          <k-input  name="languages" value={user.languages} onChange={handleInputChange} placeholder="Languee parlées" />
        </div>
    </div>
  </PageLayout>
}
