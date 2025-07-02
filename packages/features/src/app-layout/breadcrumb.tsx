import React, { Fragment } from 'react'
import { Link } from '@packages/design-system';

type BreadcrumbProps = {
    readonly links: { label: string; href: string; }[];
}

export function Breadcrumb({ links, ...props }: BreadcrumbProps) {
    return <div {...props} aria-label="breadcrumb" className='flex p-[12px] gap-[8px]'>
        {links.map((l,i) => <Fragment key={i}>
            <Link href={l.href}>{l.label}</Link>
            {(i < links.length - 1) && <span>{">"}</span>}
        </Fragment>)}
    </div>
}