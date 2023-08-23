import { useTaskProject } from "@/hooks/getQueries";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

function TaskCard({
  status,
  assigneeId,
  name,
  dueDate,
  priority,
}: {
  status: string | undefined;
  assigneeId: string | undefined;
  name: string | undefined;
  dueDate: Date | undefined;
  priority: string | undefined;
}) {
  return (
    <Box boxShadow="2xl" w="max" p="4" bg="white" rounded="md">
      <Text>name {name}</Text>
      <Text>{dueDate?.getDate()}</Text>
      <Text>{priority}</Text>
      {/**Make a component that displays a img depending on the status */}
    </Box>
  );
}

export default TaskCard;
