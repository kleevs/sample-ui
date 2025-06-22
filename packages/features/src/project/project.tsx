import React, { useState, useMemo } from "react";

type ProjectProps =  DesignSystem.Props<'Link' | 'PageLayout' | 'Button' | 'Input' | 'Panel' | 'Card' | 'Grid'>;

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

export function Project({ Input, Link, PageLayout, Button, Panel, Card, Grid, ...props }: ProjectProps) {
    const [project, setProject] = useState<ProjectType>(DefaultProject);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const action = useMemo(() => <>
        <Button onClick={() => {}}>{"💾 Sauvegarder"}</Button>
    </>, []);

  return <PageLayout {...props} action={action}>
    <Panel title='✏️ Informations du projet'>
      <Input name="title" value={project.title} onChange={handleInputChange} placeholder="Titre du projet" />
      <Input name="type" value={project.type} onChange={handleInputChange} placeholder="Type d'activité" />
      <Input name="audience" value={project.audience} onChange={handleInputChange} placeholder="Public cible" />
      <Input name="period" value={project.period} onChange={handleInputChange} placeholder="Période" />
    </Panel>

    <Grid>
        {project.users.map(user => <Card key={user.id} title={user.name}  href={`/users/${user.id}`}>
            <p><strong>Rôle :</strong> {user.role}</p>
            <p><strong>Langues :</strong> {user.languages}</p>
            <p><strong>Disponibilité :</strong> {user.available ? "✅ Oui" : "❌ Non"}</p>
            <p><strong>Projets :</strong> {user.projects.join(", ")}</p>
        </Card>)}
    </Grid>
  </PageLayout>
}
