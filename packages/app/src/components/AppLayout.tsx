import React from "react";
import { AppLayout } from '@packages/user';
import { CustomLink } from "./Link";

type AppLayoutProps = {
    readonly title: string;
    readonly breadcrumb: {
        label: string;
        href: string;
    }[];
    readonly className?: string;
    readonly children: React.ReactNode;
}

export const CustomAppLayout = (props: AppLayoutProps) => <AppLayout {...props} Link={CustomLink} />
