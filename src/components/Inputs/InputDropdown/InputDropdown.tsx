import UserSearchModal from "@/components/Modal/UserSearchModal/UserSearchModal";
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
import React, { ReactElement, ReactNode, useRef, useState } from "react";

const InputDropdown = ({
  InputData,
  isOpen,
  onClose,
}: {
  InputData: User[] | undefined;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {InputData && InputData.length > 0 ? (
        <>
          <Box
            position="absolute"
            bg="white"
            boxShadow="md"
            p="3"
            mt="1"
            ml="4"
            zIndex="1"
          >
            <List>
              {InputData.map((value, index) => {
                return (
                  <ListItem
                    onClick={() => setIsModalOpen(true)}
                    p="2"
                    shadow={"md"}
                    mt="2"
                    key={index}
                  >
                    <Flex>
                      <Avatar src={value?.img ?? ""}></Avatar>
                      <Text mt="3" ml="2">
                        {value?.username}
                      </Text>
                    </Flex>
                    <UserSearchModal
                      user={value}
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    ></UserSearchModal>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default InputDropdown;
