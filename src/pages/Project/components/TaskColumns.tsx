import { Task } from "@/models/Taskm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import TaskCard from "./TaskCard";
import { useTaskByStatus } from "@/hooks/Task/getTaskByStatus";
import { User } from "@/models/User";
import { useUser } from "@/hooks/getQueries";
import { log } from "console";

const TaskColumns = ({
  heading,
  projectId,
  user,
}: {
  heading: string;
  projectId: string;
  user: User; //make a context somehow
}) => {
  const { data: tasksData, isError: taskError } = useTaskByStatus(
    projectId,
    heading
  );
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  } = useUser(user?.email);
  if (taskError || tasksData == undefined) {
    return <p>Error fetching tasks</p>;
  }
  const tasks = tasksData.tasks;
  return (
    <Box p={4} w="25%" bg="gray.100" borderRadius="md" boxShadow="md">
      <Text mb={2}>{heading}</Text>
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.assignee_id}
          assigneeId={task.assignee_id}
          name={task.task_name}
          dueDate={new Date()} // You might need to parse the date correctly
          priority={task.priority}
          status={task.status}
          userImg={userData?.img ?? ""}
        />
      ))}
    </Box>
  );
};
export default TaskColumns;
