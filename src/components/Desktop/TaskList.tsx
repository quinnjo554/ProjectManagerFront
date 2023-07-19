import { useTaskProject } from "@/queries/getQueries";
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

  return (
    <Box>
      {tasks?.content.length ?? 0 > 0 ? (
        <Box m={2} p={2} height="15rem" overflowY={"scroll"} rounded={"lg"}>
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
                {tasks?.content.map((value, index) => (
                  <Tr key={index}>
                    <Td>{value.taskName}</Td>
                    <Td fontSize={"sm"}>
                      <Tooltip
                        rounded={"md"}
                        hasArrow
                        label={value.assignee?.userName}
                      >
                        <Avatar
                          size={"md"}
                          _hover={{}}
                          name={value.assignee?.userName ?? ""}
                          src={value.assignee?.img ?? ""}
                        ></Avatar>
                      </Tooltip>
                    </Td>
                    <Td>{value.status}</Td>
                  </Tr>
                ))}
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
