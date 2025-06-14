import { Projects } from './projects';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof Projects>>) => <Projects 
    Link={jest.fn((props) => <span {...props} />)} 
    PageLayout={jest.fn(({children}) => <div children={children} />)} 
    {...props}
/>

describe('projects', () => {
    it('should render without error', () => {
        render(<Component />)
    });
});