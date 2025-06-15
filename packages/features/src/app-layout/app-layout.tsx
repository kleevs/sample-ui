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

const H2 = styled.h1`
    font-size: xx-large;
    padding: 0.5rem;
`

const HR = styled.hr`
    box-shadow: 0 0 5px grey;
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
    return <div {...props} className='min-h-screen'>
        <Navbar action={action} />
        <Breadcrumb Link={Link} links={breadcrumb} />     
        <div className='p-[1rem]'>
            <h1 className='text-[xx-large]'>{title}</h1>
        </div>
        <div className='flex gap-[12px] padding-[12px]'>
            <div className='flex-1 gap-[8px] mb-10 bg-gray-50 dark:bg-gray-800 border shadow-lg rounded-xl p-6 shadow-[0_0_2px_grey]'>
                <H2 className='text-xl font-semibold mb-4'>Explorer</H2>
                <HR/>
                <ExplorerContent>
                    <Link  data-testid='home' href='/projects'>Accueil</Link>
                    <Link  data-testid='calendar' href='/calendar'>Calendrier</Link>
                </ExplorerContent>
            </div>
            <Content>
                {children}
            </Content>
        </div>
    </div>
}