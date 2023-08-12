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
import Logo from "../../../../public/fillin.png";
import { User } from "@/models/User";
import { useUser } from "@/hooks/getQueries";
import UserSearch from "../../Inputs/UserSearch/UserSearch";
function DesktopNav(props: { user: User }) {
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useUser(props.user?.email);
  const { isOpen, onOpen, onClose } = useDisclosure();
  //add search bar to search users to message or add to proj
  return (
    <Box
      display="flex"
      alignItems="center"
      h="20"
      bg="white"
      rounded="md"
      px="4"
      shadow="lg"
      textColor={"twitter.800"}
    >
      <Flex alignItems="center" mr="4">
        <Image src={Logo.src} boxSize="12" alt="Logo" />
      </Flex>
      <List display="flex" ml="4">
        <ListItem
          fontSize="xl"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          py={"5"}
          _hover={{ borderBottom: "3px solid lightblue" }}
          transition="border-bottom 0.1s ease-in"
        >
          <Menu>
            <MenuButton as={Text} mt={2}>
              People
            </MenuButton>
            <MenuList textColor="black" mt={2}>
              <MenuItem>Add Members</MenuItem>
              <MenuItem>Direct Message</MenuItem>
            </MenuList>
          </Menu>
          <ChevronDownIcon color="black" ml={1} mt="3" />
        </ListItem>

        <ListItem
          fontSize="xl"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          ml={4}
          py={"5"}
          transition="border-bottom 0.1s"
          _hover={{ borderBottom: "3px solid lightblue" }}
        >
          <Menu>
            <MenuButton as={Text} mt={2}>
              Projects
            </MenuButton>
            <MenuList textColor="black" mt={2}>
              <MenuItem>Create New</MenuItem>
              <MenuItem>My Projects</MenuItem>
            </MenuList>
          </Menu>
          <ChevronDownIcon color="black" ml={1} mt="3" />
        </ListItem>
      </List>
      <UserSearch></UserSearch>
      <Avatar
        className="avatar-hover"
        as={"button"}
        bg={"none"}
        p={"2px"}
        ml="auto"
        size={"lg"}
        name={user?.username ?? "quinn"}
        src={user?.img ?? ""}
        onClick={onOpen}
        _hover={{
          bg: "black",
        }}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hi {user?.username}</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              as={Link}
              href="/api/auth/signout?callbackUrl=/ "
              bg={"twitter.500"}
              textColor={"white"}
              _hover={{ bg: "twitter.700" }}
            >
              Sign out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default DesktopNav;
