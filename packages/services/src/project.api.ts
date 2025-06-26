export async function getProjects(search: string): Promise<Features.ProjectType[]> {
    const data = [
        { id: 1, title: "Visite guidée des Appartements Royaux", type: "Visite guidée", audience: "Tout public", period: "Janvier - Mars 2025", users:[] },
        { id: 2, title: "Atelier artistique pour scolaires", type: "Atelier", audience: "Scolaires", period: "Février - Juin 2025", users:[] },
        { id: 3, title: "Enquête au château (huis clos)", type: "Activité ludique", audience: "Familles", period: "Toute l'année", users:[] },
        { id: 4, title: "Formation conférenciers partenaires", type: "Formation", audience: "Professionnels", period: "Mars - Avril 2025", users:[] }
    ];

    return data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.audience.toLowerCase().includes(search.toLowerCase())
    );
}

export async function getProject(id: number) {
    const projects = await getProjects('');
    return projects.filter(p => p.id === id)[0];
}

export function exportProjectsToCSV() {
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