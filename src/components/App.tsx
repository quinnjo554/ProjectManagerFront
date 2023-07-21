"use client";
import React from "react";
import Navbar from "./LandingPage/Navbar";
import LandingHero from "./LandingPage/LandingHero";
import { Box, ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar></Navbar>
        <LandingHero></LandingHero>
      </Box>
    </ChakraProvider>
  );
}

export default App;
