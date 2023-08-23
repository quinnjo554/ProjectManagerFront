import { useTaskProject } from "@/hooks/getQueries";
import { Box, Flex, Grid } from "@chakra-ui/react";
import TaskColumns from "./components/TaskColumns";
import React from "react";
import TaskCard from "./components/TaskCard";

function ProjectTaskGrid({ id }: { id: string }) {
  const tasks = useTaskProject(id);

  //todo
  //in dev
  //in qa
  //done

  //you shouldt have to go through all the tasks for every column
  //make a query that gets a list of tasks bassed on its status.
  //then in Task Column take the heading and query with that
  return (
    <Flex gap={4} p={4}>
      {/* Create columns with labels */}
      <TaskColumns projectId={id} heading="inDev"></TaskColumns>
    </Flex>
  );
}

export default ProjectTaskGrid;
