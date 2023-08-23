import { Project } from "@/models/Project";
import { Tasks } from "@/models/Task";
import { User } from "@/models/User";
import { Message } from "@/models/Message";
import { StatGroupProps } from "@chakra-ui/react";
import { QueryFunctionContext, UseQueryResult, useQuery } from "react-query";
import { Task } from "@/models/Taskm";

 export function useTaskByStatus(projId:string|undefined, status:string|undefined): UseQueryResult<any, unknown>{
    return useQuery(['Task',projId], async ()=>{
    const url = new URL(`http://localhost:9081/Task/status/${projId}/${status}`)
        const response = await fetch(url.toString());
        const data = await response.json();
        return data;
    })
}
