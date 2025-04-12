import React, { ButtonHTMLAttributes, FC, ReactNode, useCallback, useState } from 'react'
import { css } from '@emotion/css';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { loadUsers } from './load-users';

export type UserType = {
    email: string;
    lastName: string;
    firstName: string;
}

const breadcrumb = [{
    label: 'Accueil', href: '/users'
}, {
    label: 'Liste des utilisateurs', href: '/'
}];

const inputCss= css`
    flex: 1;
`

const appLayoutCss = css`
    display: flex;
    gap: 12px;
`

const Form = styled.form`
`

const Block = styled.div`
    display: flex;
    padding: 12px;
    gap: 0.5rem;
`

const searchCss = css`
    margin: auto;
`

type UsersProps = {
    readonly AppLayout: FC<{title: string; breadcrumb: typeof breadcrumb; className?: string; children: ReactNode}>
    readonly Grid: FC<{value: UserType[]; count: number; page: number; pageSize: number; }>
    readonly Input: FC<{label: string; value: string; onChange: (v: string) => void; className?: string; }>;
    readonly Button: FC<{ children: ReactNode; type: ButtonHTMLAttributes<HTMLButtonElement>['type']; className?: string; }>;
};

export function Users({ AppLayout, Grid, Input, Button }: UsersProps) {
    const [criteria, setCriteria] = useState({ email: '', lastName: '', firstName: ''});
    const [searchCriteria, setSearchCriteria] = useState({ email: '', lastName: '', firstName: ''});
    const getUsers = useCallback(() => loadUsers(searchCriteria), [loadUsers, searchCriteria]);
    const { data: users = [] } = useQuery({ queryKey: ['users', searchCriteria], queryFn: getUsers })

    return <AppLayout className={appLayoutCss} title='Liste des utilisateurs' breadcrumb={breadcrumb}>
        <Form onSubmit={(e) => { e.preventDefault(); setSearchCriteria(criteria); }}>
            <Block>
                <Input className={inputCss} label='Email' value={criteria.email} onChange={email => setCriteria({...criteria, email})} />
                <Input className={inputCss} label='Nom' value={criteria.lastName} onChange={lastName => setCriteria({...criteria, lastName})} />
                <Input className={inputCss} label='Prénom' value={criteria.firstName} onChange={firstName => setCriteria({...criteria, firstName})} />
            </Block>
            <Block>
                <Button type='submit' data-testid='search' className={searchCss}>Rechercher</Button>
            </Block>
        </Form>
        <Grid value={users} count={10} page={0} pageSize={10} />
    </AppLayout>
}