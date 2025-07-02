import { User } from './user';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';
import { mocks } from '@dev/test-tool';

const Component = (props: Partial<ComponentProps<typeof User>>) => <User 
    AppLayout={mocks.PageLayout()} 
    email=''
    saveUser={jest.fn()}  
    getUser={jest.fn()}
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