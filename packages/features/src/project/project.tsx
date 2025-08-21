import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { Button, Grid, Input, Panel } from "@packages/design-system";

type ProjectType = Features.ProjectType;
type ProjectProps =  Features.AsProps<'AppLayout' | 'UserCard'> & {
  id: number;
  getProject: (id: number) => Promise<ProjectType>;
};

const DefaultProject: ProjectType = {
    id: 0,
    title: "", type: "", audience: "", period: "",
    users: []
}

function useStateAsync<T>(defaultValue: T) {
  const state = useState<T>(defaultValue);

  useEffect(() => {
    state[1](defaultValue);
  }, [defaultValue]);

  return state;
}

export function Project({ AppLayout, UserCard, id, getProject, ...props }: ProjectProps) {
  const { data: init = DefaultProject} = useQuery({ queryKey: ['project', id], queryFn: () => getProject(id) });
  const [project, setProject] = useStateAsync<ProjectType>(init);

  return <AppLayout {...props} action={<><Button onClick={console.log}>{"💾 Sauvegarder"}</Button></>}>
    <Panel title='✏️ Informations du projet'>
      <Input name="title" value={project.title} onChange={(e) => setProject({...project, title: e.target.value})} placeholder="Titre du projet" />
      <Input name="type" value={project.type} onChange={(e) => setProject({...project, type: e.target.value})} placeholder="Type d'activité" />
      <Input name="audience" value={project.audience} onChange={(e) => setProject({...project, audience: e.target.value})} placeholder="Public cible" />
      <Input name="period" value={project.period} onChange={(e) => setProject({...project, period: e.target.value})} placeholder="Période" />
    </Panel>

    <Grid>
        {project.users.map(user => <UserCard key={user.email} user={user}  />)}
    </Grid>
  </AppLayout>
}
