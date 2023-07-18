"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DesktopNav from "@/components/Desktop/DesktopNav";
import ProjectDisplay from "./ProjectDisplay";
import { User } from "@/models/User";
import { Session, getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

function Desktop(props: { user: User }) {
  return (
    <Box>
      <DesktopNav></DesktopNav>
      <ProjectDisplay user={props.user}></ProjectDisplay>
    </Box>
  );
}

export default Desktop;
