import { Project } from './project';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';
import { mocks } from '@dev/test-tool';

const Component = (props: Partial<ComponentProps<typeof Project>>) => <Project 
    Link={mocks.Link()}
    AppLayout={mocks.PageLayout()}
    UserCard={jest.fn()}
    getProject={jest.fn()}
    id={1}
    {...props}
/>

describe('project', () => {
    it('should render without error', () => {
        render(<Component />)
    });

    it('should render title', async () => {
        const { findByText } = render(<Component />);

        expect(await findByText("✏️ Informations du projet")).toBeVisible()
    });
});