"use client";
import UserContext from "@/contexts/UserContext";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import ContextProvider from "./ContextProvider";
export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
