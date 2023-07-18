import { StatGroupProps } from "@chakra-ui/react";
import { useQuery } from "react-query";

async function useProjectList(userId:number|undefined){
    return useQuery(['Project',userId], async ()=>{
    const url = new URL(`https:`)
        const response = await fetch(url)
    })
}

export async function useUser(email: string | undefined) {
    return useQuery(['User', email], async () => {
      const url = new URL(`http://localhost:9081/User/email/`);
      url.searchParams.append('email', email || ''); 
  
      const response = await fetch(url.toString());
      const data = await response.json();
  
      return data;
    });
  }