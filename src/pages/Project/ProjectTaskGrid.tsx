import { useTaskProject } from "@/hooks/getQueries";
import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";

function ProjectTaskGrid({ id }: { id: string }) {
  const tasks = useTaskProject(id);
  //todo
  //in dev
  //in qa
  //done
  return (
    <Flex gap={4} p={4}>
      {/* Create columns with labels */}
      <Box flex="1" bg="gray.100" p={2} borderRadius="md" boxShadow="md">
        <h2>Todo</h2>
        {tasks.data?.tasks.map(
          (task) =>
            //have a compnet named task collumns and its has children
            //make the child of it the task
            task.status === "todo" && (
              <Box
                key={task.task_id}
                bg="white"
                p={2}
                borderRadius="md"
                boxShadow="sm"
                mb={2}
              >
                <p>{task.task_name}</p>
              </Box>
            )
        )}
      </Box>
      {/* Create more columns in a similar way */}
      <Box flex="1" bg="gray.100" p={2} borderRadius="md" boxShadow="md">
        <h2>In Dev</h2>
        {tasks.data?.tasks.map(
          (task) =>
            task.status === "inDev" && (
              <Box
                key={task.task_id}
                bg="white"
                border="1px solid gray"
                p={2}
                borderRadius="md"
                boxShadow="sm"
                mb={2}
              >
                <p>{task.task_name}</p>
              </Box>
            )
        )}
      </Box>
    </Flex>
  );
}

export default ProjectTaskGrid;
