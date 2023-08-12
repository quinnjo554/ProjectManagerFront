"use client";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import DesktopNav from "@/components/Navigation/DesktopNav/DesktopNav";
import ProjectDisplay from "../../components/Desktop/ProjectDisplay";
import { User } from "@/models/User";
import { useUser } from "@/hooks/getQueries";
import UserTasks from "../../components/Desktop/UserTasks";
import ProjectList from "../../components/Desktop/ProjectList";

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
