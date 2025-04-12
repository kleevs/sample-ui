import { User } from './detail';
import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';

const Component = (props: Partial<ComponentProps<typeof User>>) => <User 
    AppLayout={({children}: any) => <div>{children}</div>}
    Input={() => <input />}
    Button={(props: any) => <button data-testid={props['data-testid']} />}
    {...props} 
/>

describe('user detail', () => {
    it('should render without error', () => {
        render(<Component />)
    });

    it('should launch save when search button is clicked', async () => {
        const { findByTestId } = render(<Component />);

        const saveButton = await findByTestId("save");
        await act(async () => saveButton.click());
    });
});