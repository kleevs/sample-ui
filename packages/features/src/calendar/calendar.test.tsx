import { Calendar } from './calendar';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';
import { mocks } from '@dev/test-tool';

const Component = (props: Partial<ComponentProps<typeof Calendar>>) => <Calendar 
    AppLayout={mocks.PageLayout()} 
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