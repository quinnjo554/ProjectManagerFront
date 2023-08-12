"use client";
import React from "react";
import Navbar from "../../components/Navigation/LandingNav/Navbar";
import LandingHero from "./components/LandingPage/LandingHero";
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
