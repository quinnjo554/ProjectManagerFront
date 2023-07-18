"use client";
import Image from "next/image";
import styles from "./page.module.css";
import App from "@/components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main>
          <App></App>
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
