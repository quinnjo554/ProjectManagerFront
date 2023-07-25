"use client";
import { ChangeEvent, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  ListItem,
  Avatar,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useUserContaining } from "@/queries/getQueries"; // Replace with the correct import path for your hook

function Search() {
  const [userSearch, setUserSearch] = useState("");
  const {
    data: users,
    isLoading: userLoading,
    isError: userError,
    refetch,
  } = useUserContaining(userSearch);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUserSearch(event.target.value);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        textColor={"white"}
        placeholder={""}
        value={userSearch}
        onChange={handleChange}
        borderRadius="full"
        boxShadow="md"
        _focus={{
          borderColor: "teal.500",
          boxShadow: "0 0 0 2px rgba(52, 144, 220, 0.3)",
        }}
      />
      {users && userSearch && !userLoading && !userError && (
        <UnorderedList
          listStyleType={"none"}
          position="absolute"
          left={0}
          top="100%"
          bg="white"
          color="black"
          borderRadius="md"
          zIndex={"2"}
          boxShadow="md"
          p={2}
        >
          {users.length ? (
            users.map((user) => (
              <ListItem bg={"gray.200"} mb="4" p="2" key={user?.userId}>
                <Avatar
                  size="sm"
                  name={user?.userName ?? ""}
                  src={user?.img ?? ""}
                  mr={2}
                />
                {user?.userName}
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </UnorderedList>
      )}
    </InputGroup>
  );
}

export default Search;
