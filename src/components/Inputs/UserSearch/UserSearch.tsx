import { Box, Input, useDisclosure } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { User } from "@/models/User"; // Assuming you have imported the useAllUsersEmail hook and User type
import { useAllUsersEmail } from "@/queries/getQueries";
import InputDropdown from "../InputDropdown/InputDropdown";

function UserSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState(""); // State to store the user input for search

  // useAllUsersEmail hook with the searchTerm as a parameter
  const { data, isLoading, isError } = useAllUsersEmail(searchTerm);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = data || []; // Use an empty array as the initial value when data is undefined

  return (
    <Box>
      <Input
        variant="outline"
        placeholder="Search for users"
        ml="4"
        flex="1"
        maxW="xs"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={onOpen} // Open the dropdown when the search input is focused
        onBlur={onClose} // Close the dropdown when the search input loses focus
      />
      <InputDropdown InputData={filteredUsers} isOpen={isOpen} />
    </Box>
  );
}

export default UserSearch;
