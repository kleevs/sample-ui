import { User } from './user';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof User>>) => <User 
    Input={jest.fn(() => <div />)} 
    PageLayout={jest.fn(({children}) => <div children={children} />)} 
    Panel={jest.fn(({title, children}) => <div><h1>{title}</h1>{children}</div>)} 
    Button={jest.fn(() => <div />)} 
    saveUser={jest.fn()}  
    {...props} 
/>

describe('user', () => {
    it('should render without error', () => {
        render(<Component />)
    });

    it('should render title', async () => {
        const { findByText } = render(<Component />);

        expect(await findByText("✏️ Informations sur l'utilisateur")).toBeVisible()
    });
});