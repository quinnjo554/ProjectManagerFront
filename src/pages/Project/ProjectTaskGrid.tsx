import { useTaskProject } from "@/hooks/getQueries";
import { Box, Flex, Grid } from "@chakra-ui/react";
import TaskColumns from "./components/TaskColumns";
import React from "react";
import TaskCard from "./components/TaskCard";
import { User } from "@/models/User";

function ProjectTaskGrid({ id, user }: { id: string; user: User }) {
  //i would kill for a context but this shit aint workin
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
      <TaskColumns user={user} projectId={id} heading="TODO" />
      <TaskColumns user={user} projectId={id} heading="Development" />
      <TaskColumns user={user} projectId={id} heading="QA" />
      <TaskColumns user={user} projectId={id} heading="Done" />
    </Flex>
  );
}

export default ProjectTaskGrid;
