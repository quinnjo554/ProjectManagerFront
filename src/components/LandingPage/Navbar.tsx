import React from "react";
import { Box, Image, Text, Button, ButtonGroup, Link } from "@chakra-ui/react";
function Navbar() {
  return (
    <Box display={"grid"} w={"full"} h={"20"} bg={"black"} rounded={"md"}>
      <Box>
        <Image src=""></Image>
        <Text
          as={"h1"}
          mt={"5"}
          ml={"2"}
          display={"grid"}
          fontSize={"2xl"}
          fontFamily={"sans-serif"}
          textColor={"white"}
        >
          Project Manager
        </Text>
      </Box>
      <Box>
        <Link href="/main">
          <Button
            w={"max"}
            position={"absolute"}
            right={"5"}
            top={"5"}
            bg={"twitter.500"}
            textColor={"white"}
            _hover={{ bg: "twitter.700" }}
          >
            Sign up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;
