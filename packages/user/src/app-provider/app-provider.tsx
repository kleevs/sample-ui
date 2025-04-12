import React, { ReactNode, useMemo } from 'react'
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';

type AppProviderProps = {
    readonly children?: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const queryClient = useMemo(() => new QueryClient(), []); 

    return <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={[]}>
            {children}
        </HydrationBoundary>
    </QueryClientProvider>
}