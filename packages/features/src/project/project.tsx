import React, { useState, useMemo } from "react";

type ProjectProps =  DesignSystem.AsProps<'Link' | 'PageLayout' | 'Button' | 'Input' | 'Panel' | 'Grid'> & Features.AsProps<'UserCard'>;

type UserType = Features.UserType;

type ProjectType = {
    readonly id: number;
    readonly title: string;
    readonly type: string;
    readonly audience: string;
    readonly period: string;
    readonly users: UserType[];
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

export function Project({ Input, Link, PageLayout, Button, Panel, UserCard, Grid, ...props }: ProjectProps) {
    const [project, setProject] = useState<ProjectType>(DefaultProject);

  return <PageLayout {...props} action={<><Button onClick={console.log}>{"💾 Sauvegarder"}</Button></>}>
    <Panel title='✏️ Informations du projet'>
      <Input name="title" value={project.title} onChange={(e) => setProject({...project, title: e.target.value})} placeholder="Titre du projet" />
      <Input name="type" value={project.type} onChange={(e) => setProject({...project, type: e.target.value})} placeholder="Type d'activité" />
      <Input name="audience" value={project.audience} onChange={(e) => setProject({...project, audience: e.target.value})} placeholder="Public cible" />
      <Input name="period" value={project.period} onChange={(e) => setProject({...project, period: e.target.value})} placeholder="Période" />
    </Panel>

    <Grid>
        {project.users.map(user => <UserCard key={user.id} user={user}  />)}
    </Grid>
  </PageLayout>
}
