import { Calendar } from './calendar';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof Calendar>>) => <Calendar 
    PageLayout={jest.fn(({children}) => <div children={children} />)} 
    {...props} 
/>

describe('calendar', () => {
    it('should render without error', () => {
        render(<Component />)
    });

    it('should render title', async () => {
        const { findByText } = render(<Component />);

        expect(await findByText("📅 Calendrier des activités")).toBeVisible()
    });
});