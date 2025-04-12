import { Users } from './list';
import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof Users>>) => <Users 
    AppLayout={({children}: any) => <div>{children}</div>}
    Grid={() => <div />}
    Input={() => <input />}
    Button={(props: any) => <button data-testid={props['data-testid']} />}
    {...props} 
/>

describe('user list', () => {
    it('should render without error', () => {
        render(<Component />)
    });

    it('should launch research when search button is clicked', async () => {
        const { findByTestId } = render(<Component />);

        const searchButton = await findByTestId("search");
        await act(async () => searchButton.click());
    });
});