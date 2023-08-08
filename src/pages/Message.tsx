"use client";
import MessageBox from "@/components/Message/MessageBox";
import { User } from "@/models/User";
import { useUser } from "@/queries/getQueries";
import { Box } from "@chakra-ui/react";
import React from "react";
//fix the way you get the email
//use grpc
//wrap session in a use context
function Message({ sender, receiver }: { sender: User; receiver: string }) {
  const { data } = useUser(receiver);
  return (
    <Box>
      <MessageBox sender={sender} receiver={data}></MessageBox>
    </Box>
  );
}

export default Message;
