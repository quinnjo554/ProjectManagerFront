"use client";
import React from "react";
import DesktopNav from "../Desktop/DesktopNav";
import { Box } from "@chakra-ui/react";
import { User } from "@/models/User";
import TaskList from "./TicketList";

function Project(props: { user: User; projectId: string | undefined }) {
  return (
    <Box>
      <DesktopNav user={props.user} />
      <TaskList projectId={props.projectId}></TaskList>
    </Box>
  );
}

export default Project;
