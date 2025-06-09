import React, { useState, useEffect, useMemo } from "react";
import { Link, PageLayout } from '@packages/components';

type Data = {
    id: number;
    title: string;
    type: string;
    audience: string;
    period: string;
};

export function Projects() {
	const [projects, setProjects] = useState<Data[]>([]);
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState<Data[]>([]);

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

  	const action = useMemo(() => <div className="flex gap-2"><input
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
	</div>, [exportToCSV, setSearch]);

  return <PageLayout action={action}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((project) => <Link key={project.id} href={`/projects/${project.id}`}>
              <div
                className="border dark:border-gray-700 rounded-2xl shadow-lg p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-2xl transition"
              >
                <h2 className="text-xl font-bold mb-1 text-blue-900 dark:text-blue-300">{project.title}</h2>
                <p><span className="font-medium">🎭 Type :</span> {project.type}</p>
                <p><span className="font-medium">👥 Public :</span> {project.audience}</p>
                <p><span className="font-medium">📅 Période :</span> {project.period}</p>
              </div>
            </Link>)
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-300">Aucun projet trouvé.</p>
          )}
		</div>
	</PageLayout>
}
