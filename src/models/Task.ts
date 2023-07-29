import { UseRangeSliderProps } from "@chakra-ui/react";
import { Project } from "./Project";
import { User } from "./User";

export type Task = {
   tasks:{
    task_id?: string;
    project_id?: number;
    task_name?: string;
    status?: string;
  description?: string;
  priority?: string;
  due_date?: string;
  assignee_id?: User; 
   }[],users: {  user_id?: string | undefined;
      username?: string | null | undefined;
      email?: string | null | undefined;
      password?: string | null | undefined;
      img?: string | null | undefined;
      description ?: string | null | undefined;}[]
}