import { useTaskProject } from "@/queries/getQueries";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

function TicketList(props: { projectId: string | undefined }) {
  const {
    data: userProj,
    isLoading: userProjLoading,
    isError: userProjError,
  } = useTaskProject(props.projectId ?? "");

  return (
    <Box>
      <Text>
        {props.projectId}
        {userProj?.content.map((value, index) => {
          return (
            <Box mb={3}>
              <p>{value.assignee?.email}</p>
              <p>{value.taskName}</p>
              <p>{value.status}</p>
            </Box>
          );
        })}
      </Text>
    </Box>
  );
}

export default TicketList;
