import { User } from "@/models/User";
import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectList from "./ProjectList";

function ProjectDisplay(props: { user: User }) {
  return (
    //if the user hasnt been regeserted then render the tutorial on how to start
    <Box overflow={"scroll"}>
      <ProjectList email={props.user?.email}></ProjectList>
    </Box>
  );
}

export default ProjectDisplay;
