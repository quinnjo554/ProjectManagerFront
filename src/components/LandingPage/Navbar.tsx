import React, { useEffect, useState } from "react";
import { Box, Image, Text, Button, ButtonGroup, Link } from "@chakra-ui/react";
import { Session, getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { User } from "@/models/User";
import { useSession } from "next-auth/react";
function Navbar() {
  const { data: session } = useSession();

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
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/ ">
            <Button
              w={"max"}
              position={"absolute"}
              right={"5"}
              top={"5"}
              bg={"twitter.500"}
              textColor={"white"}
              _hover={{ bg: "twitter.700" }}
            >
              Sign out
            </Button>
          </Link>
        ) : (
          <Link href="/api/auth/signin?callbackUrl=/desktop/main">
            <Button
              w={"max"}
              position={"absolute"}
              right={"5"}
              top={"5"}
              bg={"twitter.500"}
              textColor={"white"}
              _hover={{ bg: "twitter.700" }}
            >
              Sign in
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}

export default Navbar;
