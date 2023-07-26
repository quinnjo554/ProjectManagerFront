"use client";
import React from "react";
import DesktopNav from "../Desktop/DesktopNav";
import { Box } from "@chakra-ui/react";
import { User } from "@/models/User";
import TaskList from "./TaskList";

function Project(props: { user: User }) {
  return (
    <Box>
      <DesktopNav user={props.user} />
      <TaskList></TaskList>
    </Box>
  );
}

export default Project;
