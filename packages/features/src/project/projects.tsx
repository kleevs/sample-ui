import React, { useState, useEffect, FC, useMemo } from "react";

type Data = {
    id: number;
    title: string;
    type: string;
    audience: string;
    period: string;
};

type ProjectsProps = {
  readonly PageLayout: FC<PageLayoutProps>;
  readonly Link: FC<LinkProps>;
}

export function Projects({ PageLayout, Link }: ProjectsProps) {
	const [projects, setProjects] = useState<Data[]>([]);
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState<Data[]>([]);
	const [newProject, setNewProject] = useState({ title: "", type: "", audience: "", period: "" });
	const [editingId, setEditingId] = useState<number | null>(null);

	useEffect(() => {
		const mockData = [
		{ id: 1, title: "Visite guidée des Appartements Royaux", type: "Visite guidée", audience: "Tout public", period: "Janvier - Mars 2025" },
		{ id: 2, title: "Atelier artistique pour scolaires", type: "Atelier", audience: "Scolaires", period: "Février - Juin 2025" },
		{ id: 3, title: "Enquête au château (huis clos)", type: "Activité ludique", audience: "Familles", period: "Toute l'année" },
		{ id: 4, title: "Formation conférenciers partenaires", type: "Formation", audience: "Professionnels", period: "Mars - Avril 2025" }
		];
		setProjects(mockData);
	}, []);

	useEffect(() => {
		setFiltered(
		projects.filter(p =>
			p.title.toLowerCase().includes(search.toLowerCase()) ||
			p.audience.toLowerCase().includes(search.toLowerCase())
		)
		);
	}, [search, projects]);

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setNewProject(prev => ({ ...prev, [name]: value }));
	};

	const handleAddOrUpdateProject = () => {
		if (!newProject.title || !newProject.type || !newProject.audience || !newProject.period) return;
		if (editingId !== null) {
		setProjects(prev => prev.map(p => (p.id === editingId ? { ...newProject, id: editingId } : p)));
		setEditingId(null);
		} else {
		const newEntry = { ...newProject, id: Date.now() };
		setProjects(prev => [...prev, newEntry]);
		}
		setNewProject({ title: "", type: "", audience: "", period: "" });
	};

	const handleEdit = (project: Data) => {
		setNewProject({ title: project.title, type: project.type, audience: project.audience, period: project.period });
		setEditingId(project.id);
	};

	const handleDelete = (id: number) => {
		if (confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
		setProjects(prev => prev.filter(p => p.id !== id));
		}
	};

	const exportToCSV = () => {
		const headers = ["Titre", "Type", "Public", "Période"];
		const rows = filtered.map(p => [p.title, p.type, p.audience, p.period]);
		let csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "catalogue_projets.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

  	const action = useMemo(() => <><input
            type="text"
            className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full sm:w-1/2 shadow-sm bg-white dark:bg-gray-800 dark:text-white"
            placeholder="🔍 Rechercher un projet..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={exportToCSV}
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >⬇️ Exporter CSV</button>
	</>, [exportToCSV, setSearch]);

  return <PageLayout action={action}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((project) => <Link href={`/projects/${project.id}`}>
              <div
                key={project.id}
                className="border dark:border-gray-700 rounded-2xl shadow-lg p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl transition"
              >
                <h2 className="text-xl font-bold mb-1 text-blue-900 dark:text-blue-300">{project.title}</h2>
                <p><span className="font-medium">🎭 Type :</span> {project.type}</p>
                <p><span className="font-medium">👥 Public :</span> {project.audience}</p>
                <p><span className="font-medium">📅 Période :</span> {project.period}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => handleEdit(project)} className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">✏️ Modifier</button>
                  <button onClick={() => handleDelete(project.id)} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">🗑️ Supprimer</button>
                </div>
              </div>
            </Link>)
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-300">Aucun projet trouvé.</p>
          )}
		</div>
	</PageLayout>
}
