"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

interface AppProvidersProps {
  readonly children: React.ReactNode;
}

export function AppProviders(props: AppProvidersProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 30,
          },
        },
      }),
  );

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
    >
      <QueryClientProvider client={queryClient}>
        {props.children}
        <Toaster richColors position="top-right" theme="dark" />
      </QueryClientProvider>
    </NextThemesProvider>
  );
}

