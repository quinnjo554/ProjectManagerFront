import { Project } from "@/models/Project";
import { Tasks } from "@/models/Task";
import { User } from "@/models/User";
import { Message } from "@/models/Message";
import { StatGroupProps } from "@chakra-ui/react";
import { QueryFunctionContext, UseQueryResult, useQuery } from "react-query";
import { Task } from "@/models/Taskm";
interface ApiResponse {
    tasks: Task[]; // Assuming Task is the type for individual tasks
  }
  export function useTaskByStatus(
    projId: string | undefined,
    status: string | undefined
  ): UseQueryResult<ApiResponse, unknown> {
    return useQuery(['Task', projId, status], async () => {
      const url = new URL(`http://localhost:9081/Task/status/${projId}/${status}`);
      const response = await fetch(url.toString());
      const data:ApiResponse = await response.json();
      return data;
    });
  }