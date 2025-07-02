import { Projects } from './projects';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';
import { mocks } from '@dev/test-tool';

const Component = (props: Partial<ComponentProps<typeof Projects>>) => <Projects 
    AppLayout={mocks.PageLayout()} 
    getProjects={jest.fn()}
    exportProjectsToCSV={jest.fn()}
    {...props}
/>

describe('projects', () => {
    it('should render without error', () => {
        render(<Component />)
    });
});