"use client";

import {
    QueryClient,
    QueryClientProvider,
    QueryOptions,
} from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import api from "@/lib/api";
import React from "react";

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
    const { data } = await api.get(`${queryKey?.[0]}`);
    return data;
};
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AuthProvider>
    );
}

