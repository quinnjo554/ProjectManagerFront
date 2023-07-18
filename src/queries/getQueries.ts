import { Project } from "@/models/Project";
import { User } from "@/models/User";
import { StatGroupProps } from "@chakra-ui/react";
import { UseQueryResult, useQuery } from "react-query";

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
        const response = await fetch(url.toString());
        const data = await response.json();
        return data;
}

export function useUser(email: string | undefined | null): UseQueryResult<User, unknown> {
    return useQuery(['User', email], async () => {
      const url = new URL(`http://localhost:9081/User/email/${email}`);

      const response = await fetch(url.toString());
      const data = await response.json();
  
      return data;
    });
  }