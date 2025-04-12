import React from "react";
import { AppProvider } from "@packages/user";

export default function Layout({ children }: {
    readonly children: React.ReactNode;
}) {
    return <AppProvider>
        {children}
    </AppProvider>
}