import { User } from "@/models/User";
import { Box } from "@chakra-ui/react";
import React from "react";

function ProjectDisplay(props: { user: User }) {
  return (
    //if the user hasnt been regeserted then render the tutorial on how to start

    <Box>
      <p>{props.user?.name}k</p>
    </Box>
  );
}

export default ProjectDisplay;
