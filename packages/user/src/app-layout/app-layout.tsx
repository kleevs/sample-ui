import React, { ReactNode, ComponentProps } from 'react'
import styled from 'styled-components';
import { Navbar } from './navbar';
import { Breadcrumb } from './breadcrumb';

type AppLayoutProps = {
    readonly title: string;
    readonly breadcrumb: ComponentProps<typeof Breadcrumb>['links']
    readonly Link: ComponentProps<typeof Breadcrumb>['Link']
    readonly children?: ReactNode;
}

const Body = styled.div`
    padding: 12px;
`

const Container = styled.div`
    min-height: 100vh;
`

const PageHeader = styled.div`
    padding: 1rem;
`

const H1 = styled.h1`
    font-size: xx-large;
`


const H2 = styled.h1`
    font-size: xx-large;
    padding: 0.5rem;
`

const HR = styled.hr`
    box-shadow: 0 0 5px grey;
`

const Explorer = styled.div`
    flex: 1;
    gap: 8px;
    box-shadow: 0 0 2px grey;
`

const ExplorerContent = styled.div`
    display: flex;
    flex: 1;
    gap: 12px;
    padding: 12px;
    flex-direction: column;
`

const Content = styled.div`
    flex: 4;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export function AppLayout({ breadcrumb, children, title, Link, ...props }: AppLayoutProps) {
    return <Container>
        <Navbar />
        <Breadcrumb links={breadcrumb} Link={Link} />     
        <PageHeader>
            <H1>{title}</H1>
        </PageHeader>
        <Body {...props}>
            <Explorer>
                <H2>Explorer</H2>
                <HR/>
                <ExplorerContent>
                    <Link  data-testid='home' href='/users'>Accueil</Link>
                    <Link  data-testid='new-user' href='/users/new'>Nouvel utilisateur</Link>
                </ExplorerContent>
            </Explorer>
            <Content>
                {children}
            </Content>
        </Body>
    </Container>
}