import { Task } from "@/models/Taskm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import TaskCard from "./TaskCard";
import { useTaskByStatus } from "@/hooks/Task/getTaskByStatus";

const TaskColumns = ({
  heading,
  projectId,
}: {
  heading: string;
  projectId: string;
}) => {
  const tasks = useTaskByStatus(projectId, heading).data?.tasks;

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
      <Text mb={2}>{heading}</Text>
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.assignee_id} // Add a unique key for each item in the array
          assigneeId={task.assignee_id}
          name={task.task_name}
          dueDate={new Date()}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </Box>
  );
};

export default TaskColumns;
