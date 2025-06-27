import React, { useState, useMemo } from "react";
import { useQuery } from '@tanstack/react-query';

type ProjectType = Features.ProjectType;
type ProjectsProps =  DesignSystem.AsProps<'Link' | 'PageLayout' | 'Grid' | 'Card'> & {
	getProjects: (search: string) => Promise<ProjectType[]>;
	exportProjectsToCSV: () => void;
}

export function Projects({ Link, PageLayout, Grid, Card, getProjects, exportProjectsToCSV, ...props }: ProjectsProps) {
	const [search, setSearch] = useState("");
	const { data: projects = []} = useQuery({ queryKey: ['projects', search], queryFn: () => getProjects(search) });

  	const action = useMemo(() => <div className="flex gap-2"><input
            type="text"
            className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full sm:w-1/2 shadow-sm bg-white dark:bg-gray-800 dark:text-white"
            placeholder="🔍 Rechercher un projet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={exportProjectsToCSV}
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >⬇️ Exporter CSV</button>
	</div>, [exportProjectsToCSV, setSearch]);

  return <PageLayout {...props} action={action}>
        <Grid>
          {projects.length > 0 ? (
            projects.map((project) => <Card key={project.id} title={project.title} href={`/projects/${project.id}`}>
                <p><span className="font-medium">🎭 Type :</span> {project.type}</p>
                <p><span className="font-medium">👥 Public :</span> {project.audience}</p>
                <p><span className="font-medium">📅 Période :</span> {project.period}</p>
            </Card>)
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-300">Aucun projet trouvé.</p>
          )}
		</Grid>
	</PageLayout>
}
