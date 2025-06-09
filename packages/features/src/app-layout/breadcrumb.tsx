import React, { FC, Fragment } from 'react'
import styled from 'styled-components';
import { Link } from '@packages/components';

const Breadcrumbs = styled.div`
    display: flex;
    gap: 8px;
    padding: 12px;
`

type BreadcrumbProps = {
    readonly links: { label: string; href: string; }[];
}

export function Breadcrumb({ links, ...props }: BreadcrumbProps) {
    return <Breadcrumbs {...props} aria-label="breadcrumb">
        {links.map((l,i) => <Fragment key={i}>
            <Link href={l.href}>{l.label}</Link>
            {(i < links.length - 1) && <span>{">"}</span>}
        </Fragment>)}
    </Breadcrumbs>
}