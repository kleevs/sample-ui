import { AppLayout as AppLayout } from './app-layout';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React, { ComponentProps } from 'react';


const Component = (props: Partial<ComponentProps<typeof AppLayout>>) => <AppLayout title="" breadcrumb={[]} Link={(props) => <a href={props.href}>{props.children}</a>} {...props} />

describe('app-layout', () => {
    it('should render without error', () => {
        render(<Component title={''} breadcrumb={[]} Link={jest.fn(_ => <a />)}>test</Component>)
    });

    it('should render explorer', async () => {
        const { findByText } = render(<Component />);

        expect(await findByText('Nouvel utilisateur')).toBeVisible()
    });
});