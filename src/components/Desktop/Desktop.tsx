"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import DesktopNav from "@/components/Desktop/DesktopNav";
import ProjectDisplay from "./ProjectDisplay";
import { User } from "@/models/User";
import { useUser } from "@/queries/getQueries";

function Desktop(props: { user: User }) {
    //make test
  return (
    <Box>
      <DesktopNav />
      <ProjectDisplay user={props.user} />
    </Box>
  );
}

export default Desktop;
