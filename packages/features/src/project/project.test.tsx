import { Project } from './project';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof Project>>) => <Project 
    Link={jest.fn(() => <span />)} 
    PageLayout={jest.fn(({children}) => <div children={children} />)} 
    Button={jest.fn(() => <div />)} 
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