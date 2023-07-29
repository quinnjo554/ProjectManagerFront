import { useTaskProject, useUser } from "@/queries/getQueries";
import {
  Avatar,
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

function TaskList(props: { projectId: string }) {
  const {
    data: tasks,
    isLoading: taskLoading,
    isError: userError,
  } = useTaskProject(props.projectId);

  if (taskLoading) {
    return <div>Loading</div>;
  }
 
console.log(tasks)
  return (
    <Box>
      {tasks?.tasks.length ?? 0>0 ?  (
        <Box p={2} height="15rem" overflowY={"scroll"} rounded={"lg"}>
          <Box rounded={"lg"} p={3} boxShadow={"dark-lg"}>
            <Table variant="striped">
              <TableCaption></TableCaption>
              <Thead>
                <Tr>
                  <Th>Task Name</Th>
                  <Th>Assigned</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                
                {tasks?.users ? tasks?.tasks.map((value, index) => (
                  <Tr key={index}>
                    <Td>{value.task_name}</Td>
                    <Td fontSize={"sm"}>
                      <Tooltip
                        rounded={"md"}
                        hasArrow
                        label={tasks.users[index]?.username ?? ""}
                      >
                        <Avatar
                          size={"md"}
                          name={tasks.users[index].username ?? ""}
                          src={tasks.users[index]?.img ?? ""}
                        ></Avatar>
                      </Tooltip>
                    </Td>
                    <Td>{value.status}</Td>
                  </Tr>
                )): <></>}
              </Tbody>
            </Table>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default TaskList;
