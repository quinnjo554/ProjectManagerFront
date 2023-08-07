import { User } from "@/models/User";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { ReactElement, ReactNode, useRef } from "react";

const InputDropdown = ({
  InputData,
  isOpen,
}: {
  InputData: User[] | undefined;
  isOpen: boolean;
}) => {
  return (
    <>
      {isOpen && InputData && InputData.length > 0 ? (
        <Box
          position="absolute"
          bg="white"
          boxShadow="md"
          p="3"
          mt="1"
          ml="4"
          zIndex="popover"
        >
          <List>
            {InputData.map((value, index) => {
              return (
                <ListItem p="2" shadow={"md"} mt="2" key={index}>
                  <Flex>
                    <Avatar src={value?.img ?? ""}></Avatar>
                    <Text mt="3" ml="2">
                      {value?.username}
                    </Text>
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </Box>
      ) : null}
    </>
  );
};

export default InputDropdown;
