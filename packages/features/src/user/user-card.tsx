import React from "react";

type UserCardProps =  DesignSystem.AsProps<'Card'> & Features.Props<'UserCard'>;

export function UserCard({ Card, user, ...props }: UserCardProps) {
    return <Card {...props} key={user.id} title={user.name}  href={`/users/${user.id}`}>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Langues :</strong> {user.languages}</p>
        <p><strong>Disponibilité :</strong> {user.available ? "✅ Oui" : "❌ Non"}</p>
        <p><strong>Projets :</strong> {user.projects.join(", ")}</p>
    </Card>
}
