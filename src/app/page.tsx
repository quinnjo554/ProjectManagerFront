"use client";
import Image from "next/image";
import styles from "./page.module.css";
import App from "@/components/App";
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <App></App>
      </main>
    </ChakraProvider>
  );
}
