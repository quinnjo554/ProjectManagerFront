"use client";
import React from "react";
import DesktopNav from "../../components/Navigation/DesktopNav/DesktopNav";
import { Box } from "@chakra-ui/react";
import { User } from "@/models/User";
import ProjectTaskGrid from "./ProjectTaskGrid";
import TaskCard from "./components/TaskCard";

function Project(props: { user: User; projectId: string }) {
  return (
    <Box>
      <DesktopNav user={props.user} />
      {/**<TaskCard description="" name="" assigneeId="1" status=""></TaskCard>**/}
      <ProjectTaskGrid user={props.user} id={props.projectId} />
    </Box>
  );
}

export default Project;
