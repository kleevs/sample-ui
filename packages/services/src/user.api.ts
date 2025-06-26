export async function saveUser(user: Features.UserType) {
    console.log(user);
}

export async function getUsers(search: string) {
    const data = [
      { id: 1, name: "Claire Dubois", role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] },
      { id: 2, name: "Yann Morel", role: "Animateur ateliers", languages: "Français", available: false, projects: [] },
      { id: 3, name: "Sofia Marques", role: "Conférencière bilingue", languages: "Français, Espagnol", available: true, projects: ["Ateliers scolaires"] },
    ];

    return data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase())
    );
}


export function exportUsersToCSV() {
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