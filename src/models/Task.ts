import { Project } from "./Project";
import { User } from "./User";

export type Task = {
   content: [{
    id?: string;
    project?: Project;
    taskName?: string;
    status?: string;
  description?: string;
  priority?: string;
  dueDate?: string;
  assignee?: User; 
   }]
}