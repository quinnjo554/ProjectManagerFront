import Desktop from "@/components/Desktop/Desktop";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
import Message from "@/components/Message/Message";
async function Page({ params }: { params: { email: string } }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("api/auth/signin");
  }
  return <Message sender={session.user} receiver={params.email}></Message>;
}

export default Page;
