import { Project } from "@/models/Project";
import { Task } from "@/models/Task";
import { User } from "@/models/User";
import { StatGroupProps } from "@chakra-ui/react";
import { QueryFunctionContext, UseQueryResult, useQuery } from "react-query";

 export function useProjectList(userId:string|undefined): UseQueryResult<Project[], unknown>{
    return useQuery(['Project',userId], async ()=>{
    const url = new URL(`http://localhost:9081/UserProject/GetForUser/${userId}`)
        const response = await fetch(url.toString());
        const data = await response.json();
        return data;
    })
}

export async function getUserProj(userId:string | undefined){
    const url = new URL(`http://localhost:9081/UserProject/GetForUser/${userId}`)
        const response = await fetch(`http://localhost:9081/UserProject/GetForUser/${userId}`);
        const data = await response.json();
        return data;
}

export function useTaskProject(projectId:string) : UseQueryResult<Task, unknown>{
    return useQuery(['Task', projectId], async () =>{
        const response = await fetch(`http://localhost:9081/Task/project/${projectId}`);
        const data = await response.json();
        console.log(data)
        return data;
    })
}

export function useUserTasks(userId: string): UseQueryResult<Task, unknown> {
    const queryKey = ['Task', userId];
    const fetchTasks = async (context: QueryFunctionContext) => {
      const response = await fetch(`http://localhost:9081/Task/user/${context.queryKey[1]}`);
      const data = await response.json();
      return data;
    };
  
    const options = {
      enabled: !!userId, // Set to false if userId is not available
    };
  
    return useQuery<Task, unknown>(queryKey, fetchTasks, options);
  }

export function useUser(email: string | undefined | null): UseQueryResult<User, unknown> {
    return useQuery(['User', email], async () => {
      const url = new URL(`http://localhost:9081/User/email/${email}`);

      const response = await fetch(url.toString());
      const data = await response.json();
  
      return data;
    });
  }
export function useAllUsersEmail(email:string | undefined | null):UseQueryResult<User[],unknown>{
  return useQuery(['User', email], async () => {
    const url = new URL(`http://localhost:9081/User/email/all/${email}`);

    const response = await fetch(url.toString());
    const data = await response.json();

    return data;
  });
}