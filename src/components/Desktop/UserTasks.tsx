import { User } from "@/models/User";
import { useTaskProject, useUser, useUserTasks } from "@/queries/getQueries";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
function UserTasks(props: { user: User }) {
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useUser(props.user?.email); //user object only contains email so I need to get the full use with the query

  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useUserTasks(user?.user_id ?? "1");


  if (userLoading || tasksLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <Box p={4} textAlign="center" m={6} rounded={"lg"} boxShadow="lg">
      <Heading as="h2" size="lg" mb={4} color="twitter.500">
        Your Tasks:
      </Heading>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Task Name</Th>
            <Th>Description</Th>
            <Th>Priority</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <AnimatePresence>
            {tasks?.tasks.length && tasks.tasks.length > 0 ? (
              tasks.tasks.map((value, index) => (
                <motion.tr
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Td>{value.task_name}</Td>
                  <Td>{value.description}</Td>
                  <Td>{value.priority}</Td>
                  <Td>{value.due_date}</Td>
                  <Td>{value.status}</Td>
                </motion.tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={5}>No tasks found</Td>
              </Tr>
            )}
          </AnimatePresence>
        </Tbody>
      </Table>
    </Box>
  );
}

export default UserTasks;
