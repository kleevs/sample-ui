export async function saveUser(user: Features.UserType) {
    console.log(user);
}

export async function getUsers(search: string): Promise<Features.UserType[]> {
    const data: Features.UserType[] = [
      { email: '1', firstName: "Claire", lastName: "Dubois", role: "Guide conférencière", languages: "Français, Anglais", available: true, projects: ["Appartements Royaux"] },
      { email: '2', firstName: "Yann", lastName: "Morel", role: "Animateur ateliers", languages: "Français", available: false, projects: [] },
      { email: '3', firstName: "Sofia", lastName: "Marques", role: "Conférencière bilingue", languages: "Français, Espagnol", available: true, projects: ["Ateliers scolaires"] },
    ];

    return data.filter(p =>
        p.firstName.toLowerCase().includes(search.toLowerCase()) ||
        p.lastName.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase())
    );
}


export function exportUsersToCSV(users: Features.UserType[]) {
    const headers = ["Titre", "Type", "Public", "Période"];
    const rows = users.map(p => [p.lastName, p.firstName, p.email, p.role]);
    let csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "catalogue_projets.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};