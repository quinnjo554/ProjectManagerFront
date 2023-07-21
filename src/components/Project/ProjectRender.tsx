"use client";
import React, { useEffect, useState } from "react";
import Desktop from "@/components/Desktop/Desktop";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
import Project from "@/components/Project/Project";
import { User } from "@/models/User";

async function fetchSession() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("api/auth/signin");
  }
  return session;
}

function ProjectRender(props: { projectId: string | undefined }) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const session = await fetchSession();
        setUser(session.user);
      } catch (error) {
        // Handle error if needed
        console.error(error);
      }
    };
    fetchUserSession();
  }, []);
  return <Project projectId={props.projectId} user={user}></Project>;
}

export default ProjectRender;
