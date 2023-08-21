import { useTaskProject } from "@/hooks/getQueries";
import React from "react";

function TaskCard({
  description,
  status,
  assigneeId,
  name,
}: {
  description: string;
  status: string;
  assigneeId: string;
  name: string;
}) {
  console.log(description);
  return <div>{"balls"}</div>;
}

export default TaskCard;
