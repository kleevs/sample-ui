import { Link } from "./link"
import React, { ComponentProps } from "react"

function FakeLink(props: ComponentProps<typeof Link>) {
    return <>{props.children}</>
}

export const Card: DesignSystem.Components['Card'] = function Card({ href, title, onDelete, onUpdate, children, ...props }) {
    const Container = href ? Link : FakeLink;

    return <Container href={href || ''}>
        <div className="border rounded-xl p-4 shadow bg-white" {...props}>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{title}</h3>
            {children}
            {(onDelete || onUpdate) && <div className="mt-3 flex gap-2">
                {onUpdate && <button onClick={onUpdate} className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">✏️ Modifier</button>}
                {onDelete && <button onClick={onDelete} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">🗑️ Supprimer</button>}
            </div>}
        </div>
    </Container>
}