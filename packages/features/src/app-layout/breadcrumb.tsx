import React, { Fragment } from 'react'

type BreadcrumbProps = DesignSystem.AsProps<'Link'> & {
    readonly links: { label: string; href: string; }[];
}

export function Breadcrumb({ Link, links, ...props }: BreadcrumbProps) {
    return <div {...props} aria-label="breadcrumb" className='flex p-[12px] gap-[8px]'>
        {links.map((l,i) => <Fragment key={i}>
            <Link href={l.href}>{l.label}</Link>
            {(i < links.length - 1) && <span>{">"}</span>}
        </Fragment>)}
    </div>
}