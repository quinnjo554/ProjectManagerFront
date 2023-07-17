"use client";
import Desktop from "@/components/Desktop/Desktop";
import { ChakraProvider } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

function Page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // redirect("/api/auth/signin?callbackUrl=/desktop");
    },
  });
  return <Desktop></Desktop>;
}

export default Page;
