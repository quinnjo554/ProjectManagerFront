import Desktop from "@/components/Desktop/Desktop";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("api/auth/signin");
  }
  return <Desktop user={session.user}></Desktop>;
}

export default Page;
