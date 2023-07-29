"use client";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import DesktopNav from "@/components/Desktop/DesktopNav";
import ProjectDisplay from "./ProjectDisplay";
import { User } from "@/models/User";
import { useUser } from "@/queries/getQueries";
import UserTasks from "./UserTasks";
import ProjectList from "./ProjectList";

function Desktop(props: { user: User }) {
  //make test
  return (
    <Box>
      <DesktopNav user={props.user} />
      <ProjectDisplay user={props.user}></ProjectDisplay>
       <UserTasks user={props.user}></UserTasks>
    </Box>
  );
}

export default Desktop;
