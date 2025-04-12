import React from 'react'
import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    box-shadow: 0 0 5px grey;
`

const Logo = styled.div`
    width: 48px;
    height: 48px;
`
const Middle = styled.div`
    flex-grow: 1;
`
const Actions = styled.div``

export function Navbar() {
    return <Container>
        <Logo />
        <Middle />
        <Actions>Actions</Actions>
    </Container>
}