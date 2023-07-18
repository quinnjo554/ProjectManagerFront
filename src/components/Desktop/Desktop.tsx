"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import DesktopNav from "@/components/Desktop/DesktopNav";
import ProjectDisplay from "./ProjectDisplay";
import { User } from "@/models/User";

function Desktop(props: { user: User }) {
  return (
    <Box>
      <DesktopNav />
      <ProjectDisplay user={props.user} />
    </Box>
  );
}

export default Desktop;