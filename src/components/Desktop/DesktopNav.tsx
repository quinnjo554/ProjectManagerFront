"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Link,
  Image,
  Text,
  Avatar,
  AvatarBadge,
  Menu,
  ChakraProvider,
  List,
  ListItem,
  ListIcon,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { useSession } from "next-auth/react";
import { User } from "@/models/User";
import { useUser } from "@/queries/getQueries";
function DesktopNav(props: { user: User }) {
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useUser(props.user?.email);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avtRef = React.useRef();
  return (
    <Box
      display="flex"
      alignItems="center"
      h="20"
      bg="facebook.500"
      rounded="md"
      px="4"
      shadow="lg"
    >
      <Flex alignItems="center" mr="4">
        <Image src="/logo.jpeg" boxSize="12" alt="Logo" />
        <Text as="h1" ml="2" fontSize="3xl" color="white" fontWeight="semibold">
          Project Manager
        </Text>
      </Flex>
      <List display="flex" ml="4">
        <ListItem
          textColor="white"
          fontSize="lg"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          py={"5"}
          _hover={{ borderBottom: "3px solid white" }}
          transition="border-bottom 0.1s ease-in"
        >
          <Menu>
            <MenuButton as={Text} mt={2} color="white">
              People
            </MenuButton>
            <MenuList textColor="black" mt={2}>
              <MenuItem>Add Members</MenuItem>
              <MenuItem>Direct Message</MenuItem>
            </MenuList>
          </Menu>
          <ChevronDownIcon color="white" ml={1} mt="3" />
        </ListItem>

        <ListItem
          textColor="white"
          fontSize="lg"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          ml={4}
          py={"5"}
          transition="border-bottom 0.1s"
          _hover={{ borderBottom: "3px solid white" }}
        >
          <Menu>
            <MenuButton as={Text} mt={2} color="white">
              Projects
            </MenuButton>
            <MenuList textColor="black" mt={2}>
              <MenuItem>Create New</MenuItem>
              <MenuItem>My Projects</MenuItem>
            </MenuList>
          </Menu>
          <ChevronDownIcon color="white" ml={1} mt="3" />
        </ListItem>
      </List>
      <Avatar
        as={"button"}
        bg={"gray.100"}
        p={"2px"}
        ml="auto"
        name={user?.userName ?? "quinn"}
        src={user?.img ?? ""}
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default DesktopNav;
