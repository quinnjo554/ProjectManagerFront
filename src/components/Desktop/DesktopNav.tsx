"use client";
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
//add list functionallity
/**
 * Your Board - add and remove tickets add comments on tickets etc
 * Calendar with ticket due dates
 * Communication p to p .  grpc
 * Your Pojects
 * Backlog
 * People
 * stats for velocity
 */
function DesktopNav() {
  return (
    <Box
      display="flex"
      alignItems="center"
      h="20"
      bg="facebook.500"
      rounded="md"
      px="4"
      shadow={"lg"}
    >
      <Flex alignItems="center" mr="4">
        <Image src="/logo.jpeg" boxSize="12" alt="Logo" />
        <Text as="h1" ml="2" fontSize="3xl" color="white" fontWeight="semibold">
          Project Manager
        </Text>
      </Flex>
      <List display="flex" ml={"4"}>
        <ListItem
          textColor="white"
          fontSize="lg"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
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
          <ChevronDownIcon color="white" ml={1} mt={"3"} />
        </ListItem>

        <ListItem
          textColor="white"
          fontSize="lg"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          ml={4}
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
          <ChevronDownIcon color="white" ml={1} mt={"3"} />
        </ListItem>
      </List>
      <Avatar ml="auto" />
    </Box>
  );
}

export default DesktopNav;
