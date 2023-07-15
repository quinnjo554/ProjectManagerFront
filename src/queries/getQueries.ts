import { useQuery } from "react-query";

async function useProjectList(userId:number|undefined){
    return useQuery(['Project',userId], async ()=>{

    const url = new URL(`https:`)
        const response = await fetch(url)
    })
}