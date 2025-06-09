import React, { ReactNode } from 'react'
import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    box-shadow: 0 0 5px grey;
    align-items: center;
`

const Logo = styled.div`
    width: 48px;
    height: 48px;
`
const Middle = styled.div`
    flex-grow: 1;
`
const Actions = styled.div``

type NavbarProps = {
    action: ReactNode;
}

export function Navbar({action}: NavbarProps) {
    return <Container>
        <Logo />
        <Middle />
        <Actions>{action}</Actions>
    </Container>
}