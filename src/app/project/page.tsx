import Desktop from "@/pages/Desktop/DesktopPage";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
import Project from "@/pages/Project/ProjectPage";
async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("api/auth/signin");
  }
  return <Project user={session.user}></Project>;
}

export default Page;
