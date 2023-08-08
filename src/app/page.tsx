"use client";
import Image from "next/image";
import styles from "./page.module.css";
import App from "@/pages/App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryProvider } from "./context/ReactQueryProvider";
export default function Home() {
  return (
    <ReactQueryProvider>
      <ChakraProvider>
        <main>
          <App></App>
        </main>
      </ChakraProvider>
    </ReactQueryProvider>
  );
}
