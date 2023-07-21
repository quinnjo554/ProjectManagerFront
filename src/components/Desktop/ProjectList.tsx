import { Project } from "@/models/Project";
import { getUserProj, useProjectList, useUser } from "@/queries/getQueries";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BiInfoSquare, BiBookmark } from "react-icons/bi";
import TaskList from "./TaskList";
import { useState } from "react";
import Link from "next/link";
function ProjectList(props: { email: string | undefined | null }) {
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useUser(props.email);

  const {
    data: userProj,
    isLoading: userProjLoading,
    isError: userProjError,
  } = useProjectList(user?.userId);

  if (userLoading || userProjLoading) {
    return <Spinner />;
  }

  if (userError || userProjError) {
    return <p>Error occurred while fetching data</p>;
  }
  //on hover have the blue banner appear
  // add some transitions
  return (
    <Flex
      direction="row"
      justifyContent={"center"}
      gap={4}
      m={7}
      ml={"16"}
      w="max"
      maxH={"lg"}
      rounded={"2xl"}
    >
      {userProj && user ? (
        userProj.map((value, index) => (
          <Card
            overflow={"hidden"}
            boxShadow={"dark-lg"}
            key={index}
            maxW="md"
            style={{
              animation: `cardAnimation .6s ease-in-out ${index * 0.1}s`,
              animationDelay: ".1s",
            }}
          >
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={user?.userName ?? ""} src={user?.img ?? ""} />
                  <Box>
                    <Heading size="sm">{user?.userName}</Heading>
                    <Text>{user?.description}</Text>
                  </Box>
                </Flex>
                <Box
                  bg={"linkedin.500"}
                  px={8}
                  rounded={"2xl"}
                  textColor="white"
                  py={3}
                  w={"max"}
                  position="relative"
                  top={"0"}
                  right={"-10"}
                >
                  <Heading as="h2" size={"lg"}>
                    {value.projectName.split(" ")[0]}
                  </Heading>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text boxShadow={"lg"} p="3" rounded="md">
                {value.description}
              </Text>
            </CardBody>
            <TaskList projectId={String(value.projectId)}></TaskList>
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={<BiBookmark />}>
                Pin
              </Button>
              <Link href={`/project/${value.projectId}`}>
                <Button flex="1" variant="ghost" leftIcon={<BiInfoSquare />}>
                  View Project
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      ) : (
        <></>
      )}
    </Flex>
  );
}

export default ProjectList;
