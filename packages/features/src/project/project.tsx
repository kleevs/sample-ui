import React, { useState, useMemo } from "react";

type ProjectProps =  DesignSystem.Props<'Link' | 'PageLayout' | 'Button' | 'Input'>;

type ProjectType = {
    readonly id: number;
    readonly title: string;
    readonly type: string;
    readonly audience: string;
    readonly period: string;
    readonly users: any[];
};

const DefaultProject: ProjectType = {
    id: 0,
    title: "", type: "", audience: "", period: "",
    users: [
      { id: 1, name: "Claire Dubois", role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] },
      { id: 2, name: "Yann Morel", role: "Animateur ateliers", languages: "Français", available: false, projects: [] },
      { id: 3, name: "Sofia Marques", role: "Conférencière bilingue", languages: "Français, Espagnol", available: true, projects: ["Ateliers scolaires"] },
    ]
}

export function Project({ Input, Link, PageLayout, Button, ...props }: ProjectProps) {
    const [project, setProject] = useState<ProjectType>(DefaultProject);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const action = useMemo(() => <>
        <Button onClick={() => {}}>{"💾 Sauvegarder"}</Button>
    </>, []);

  return <PageLayout {...props} action={action}>
    <div className="mb-10 bg-gray-50 dark:bg-gray-800 border shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">✏️ Informations du projet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="title" value={project.title} onChange={handleInputChange} placeholder="Titre du projet" />
        <Input name="type" value={project.type} onChange={handleInputChange} placeholder="Type d'activité" />
        <Input name="audience" value={project.audience} onChange={handleInputChange} placeholder="Public cible" />
        <Input name="period" value={project.period} onChange={handleInputChange} placeholder="Période" />
        </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.users.map(user => <Link key={user.id} href={`/users/${user.id}`}>
          <div key={user.id} className="border rounded-xl p-4 shadow bg-white">
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{user.name}</h3>
            <p><strong>Rôle :</strong> {user.role}</p>
            <p><strong>Langues :</strong> {user.languages}</p>
            <p><strong>Disponibilité :</strong> {user.available ? "✅ Oui" : "❌ Non"}</p>
            <p><strong>Projets :</strong> {user.projects.join(", ")}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => {}} className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">✏️ Modifier</button>
              <button onClick={() => {}} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">🗑️ Supprimer</button>
            </div>
          </div>
        </Link>)}
      </div>
  </PageLayout>
}
