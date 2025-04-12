import React, { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react'
import { css } from '@emotion/css'
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';

type UserType = {
    email: string;
    lastName: string;
    firstName: string;
}

const breadcrumb = [{
    label: 'Accueil', href: '/users'
}, {
    label: 'Nouvel utilisateur', href: '/users/new'
}];

const inputCss= css`
    flex: 1;
`

const appLayoutCss = css`
    display: flex;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export type UserProps = {
    readonly AppLayout: FC<{title: string; breadcrumb: typeof breadcrumb; className?: string; children: ReactNode}>
    readonly Input: FC<{label: string; value: string; onChange: (v: string) => void; className?: string; }>;
    readonly Button: FC<{ children: ReactNode; type: ButtonHTMLAttributes<HTMLButtonElement>['type']; className?: string; }>;
};

async function saveUser(user: UserType) {
    console.log('Saving user', user);
    await Promise.resolve();
}

export function User({ AppLayout, Input, Button }: UserProps) {
    const [value, setValue] = useState({ email: '', lastName: '', firstName: ''});
    const { mutateAsync: onSave } = useMutation({ mutationFn: saveUser });

    return <AppLayout className={appLayoutCss} title='Detail utilisateur' breadcrumb={breadcrumb}>
        <Form onSubmit={(e) => { e.preventDefault(); onSave(value); }}>
            <Input className={inputCss} label='Email' value={value.email} onChange={email => setValue({...value, email})} />
            <Input className={inputCss} label='Nom' value={value.lastName} onChange={lastName => setValue({...value, lastName})} />
            <Input className={inputCss} label='Prénom' value={value.firstName} onChange={firstName => setValue({...value, firstName})} />
            <Button type='submit' data-testid='save'>Sauvegarde</Button>
        </Form>
    </AppLayout>
}