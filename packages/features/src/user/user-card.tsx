import { Card } from "@packages/design-system";
import React from "react";

type UserCardProps =  Features.Props<'UserCard'>;

export function UserCard({ user, ...props }: UserCardProps) {
    return <Card {...props} title={`${user.lastName} ${user.firstName}`}  href={`/users/${user.email}`}>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Langues :</strong> {user.languages}</p>
        <p><strong>Disponibilité :</strong> {user.available ? "✅ Oui" : "❌ Non"}</p>
        <p><strong>Projets :</strong> {user.projects.join(", ")}</p>
    </Card>
}
