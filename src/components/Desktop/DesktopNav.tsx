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
    <ChakraProvider>
      <Box
        display="flex"
        alignItems="center"
        h="20"
        bg="facebook.500"
        rounded="md"
      >
        <Box>
          <Image src="" />
          <Text
            as="h1"
            ml="2"
            fontSize="3xl"
            color="white"
            fontWeight="semibold"
          >
            Project Manager
          </Text>
        </Box>
        <List ml={"72"} display="flex">
          <ListItem
            w="max"
            h="20"
            textColor="white"
            fontSize="lg"
            display="flex"
            alignItems="center"
            ml={16}
            fontWeight={"semibold"}
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
            <ListIcon mt={3} as={ChevronDownIcon} color="blue.200" ml={1} />
          </ListItem>

          <ListItem
            w="max"
            h="20"
            textColor="white"
            fontSize="lg"
            display="flex"
            alignItems="center"
            ml={16}
            fontWeight={"semibold"}
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
            <ListIcon mt={3} as={ChevronDownIcon} color="blue.200" ml={1} />
          </ListItem>
        </List>
        <Avatar position={"fixed"} right={"1%"}></Avatar>
      </Box>
    </ChakraProvider>
  );
}

export default DesktopNav;
