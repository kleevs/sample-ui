import React, { useState, FC, useMemo } from "react";

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
        setUser(prev => ({ ...prev, [name]: value }));
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
          <input name="firstName" value={user.firstName} onChange={handleInputChange} className="border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" placeholder="Nom" />
          <input name="lastName" value={user.lastName} onChange={handleInputChange} className="border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" placeholder="Prénom" />
          <input name="email" value={user.email} onChange={handleInputChange} className="border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" placeholder="email" />
          <input name="role" value={user.role} onChange={handleInputChange} className="border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" placeholder="role" />
          <input name="languages" value={user.languages} onChange={handleInputChange} className="border border-gray-300 dark:border-gray-600 p-2 rounded shadow-sm bg-white dark:bg-gray-700 dark:text-white" placeholder="Languee parlées" />
        </div>
    </div>
  </PageLayout>
}
