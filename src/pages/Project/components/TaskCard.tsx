import UserSearch from "@/components/Inputs/UserSearch/UserSearch";
import { useTaskProject, useUser } from "@/hooks/getQueries";
import PriorityIcon from "@/services/PriorityIcon";
import {
  Avatar,
  Box,
  ComponentWithAs,
  IconProps,
  Img,
  Text,
} from "@chakra-ui/react";
import { Co2Sharp } from "@mui/icons-material";
import React, { ReactElement, useContext, useEffect, useState } from "react";

function TaskCard({
  status,
  assigneeId,
  userImg,
  name,
  dueDate,
  priority,
}: {
  status: string | undefined;
  assigneeId: string | undefined;
  name: string | undefined;
  dueDate: Date | undefined;
  priority: string | undefined;
  userImg: string | undefined;
}) {
  return (
    <Box boxShadow="2xl" w="260px" p="4" bg="white" rounded="md">
      <Text>{name}</Text>
      <Text>{dueDate?.getDate()}</Text>
      <PriorityIcon priority={priority} />
      <Avatar src={userImg} />
      {/**Make a component that displays a img depending on the status
       *
       * Make a get user by id
       */}
    </Box>
  );
}

export default TaskCard;
