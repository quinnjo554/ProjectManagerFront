"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DesktopNav from "@/components/Desktop/DesktopNav";
import ProjectDisplay from "./ProjectDisplay";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
import AuthProvider from "@/app/context/AuthProvider";
function Desktop() {
  return (
    <Box>
      <AuthProvider>
        <DesktopNav></DesktopNav>
        <ProjectDisplay></ProjectDisplay>
      </AuthProvider>
    </Box>
  );
}

export default Desktop;
