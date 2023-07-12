"use client";
import DesktopNav from "@/components/Desktop/DesktopNav";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function Page() {
  return (
    <ChakraProvider>
      <DesktopNav></DesktopNav>
    </ChakraProvider>
  );
}

export default Page;
