import Desktop from "@/components/Desktop/Desktop";
import React, { FC } from "react";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";
import { redirect } from "next/navigation";
import Project from "@/components/Project/Project";
import ProjectRender from "@/components/Project/ProjectRender";
import { PageProps } from "../../../../.next/types/app/layout";
const Page: FC<PageProps> = ({ params }) => {
  return <ProjectRender projectId={params.id}></ProjectRender>;
};

export default Page;
