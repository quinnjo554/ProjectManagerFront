import { User } from "@/models/User";
import { useAllMessagesForUser } from "@/queries/getQueries";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { sendStatusCode } from "next/dist/server/api-utils";
import React, { useState } from "react";

function MessageBox({ sender, receiver }: { sender: User; receiver: User }) {
  const [newMessage, setNewMessage] = useState("");
  const { data } = useAllMessagesForUser(
    receiver?.email ?? "",
    sender?.email ?? ""
  );
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Implement your logic to send the message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <VStack width="400px" p="4" spacing="3" bgColor="gray.100">
      <Box borderWidth="1px" borderRadius="md" p="3" bg="white">
        {/* Render messages */}
        {data?.map((message, index) => (
          <Flex
            key={index}
            justify={
              message.sender === sender?.email ? "flex-end" : "flex-start"
            }
          >
            <Box
              p="2"
              maxW="100%"
              bg={message.sender === sender?.email ? "blue.200" : "gray.200"}
              borderRadius="md"
            >
              <Text>{message.message_text}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Divider />
      <Flex align="center">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button ml="2" colorScheme="blue" onClick={handleSendMessage}>
          Send
        </Button>
      </Flex>
    </VStack>
  );
}

export default MessageBox;
