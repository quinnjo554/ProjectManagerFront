import React from "react";
import Navbar from "./LandingPage/Navbar";
import LandingHero from "./LandingPage/LandingHero";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <LandingHero></LandingHero>
    </Box>
  );
}

export default App;
