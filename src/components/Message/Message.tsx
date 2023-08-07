"use client";
import { User } from "@/models/User";
import { useUser } from "@/queries/getQueries";
import React from "react";
//fix the way you get the email
//use grpc
function Message({ sender, receiver }: { sender: User; receiver: string }) {
  const { data } = useUser(receiver);
  return (
    <div>
      {sender?.email}
      {data?.email}
    </div>
  );
}

export default Message;
