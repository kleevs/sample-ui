import React, { FC, Fragment, ReactNode } from 'react'
import styled from 'styled-components';

const Breadcrumbs = styled.div`
    display: flex;
    gap: 8px;
    padding: 12px;
`

type LinkProps = {
    children: ReactNode;
    href: string;
};

type BreadcrumbProps = {
    readonly links: { label: string; href: string; }[];
    readonly Link: FC<LinkProps>;
}

export function Breadcrumb({ links, Link, ...props }: BreadcrumbProps) {
    return <Breadcrumbs {...props} aria-label="breadcrumb">
        {links.map((l,i) => <Fragment key={i}>
            <Link href={l.href}>{l.label}</Link>
            {(i < links.length - 1) && <span>{">"}</span>}
        </Fragment>)}
    </Breadcrumbs>
}