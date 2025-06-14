import React, { ReactNode, ComponentProps } from 'react'
import styled from 'styled-components';
import { Navbar } from './navbar';
import { Breadcrumb } from './breadcrumb';

type AppLayoutProps = DesignSystem.Props<'Link'> & {
    readonly title?: string;
    readonly breadcrumb?: ComponentProps<typeof Breadcrumb>['links']
    readonly children?: ReactNode;
    readonly action?: ReactNode;
}

const Body = styled.div`
    display: flex;
    gap: 12px;
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

export function AppLayout({ Link, breadcrumb = [], children = <></>, title = '', action, ...props }: AppLayoutProps) {
    return <Container {...props}>
        <Navbar action={action} />
        <Breadcrumb Link={Link} links={breadcrumb} />     
        <PageHeader>
            <H1>{title}</H1>
        </PageHeader>
        <Body>
            <Explorer className='mb-10 bg-gray-50 dark:bg-gray-800 border shadow-lg rounded-xl p-6'>
                <H2 className='text-xl font-semibold mb-4'>Explorer</H2>
                <HR/>
                <ExplorerContent>
                    <Link  data-testid='home' href='/projects'>Accueil</Link>
                    <Link  data-testid='calendar' href='/calendar'>Calendrier</Link>
                </ExplorerContent>
            </Explorer>
            <Content>
                {children}
            </Content>
        </Body>
    </Container>
}