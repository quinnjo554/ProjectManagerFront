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
  IconButton,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiChat, BiInfoSquare, BiShare, BiBookmark } from "react-icons/bi";
import { HiBookmark } from "react-icons/hi";
function ProjectList(props: { email: string | undefined | null }) {
  const [projectList, setProjectList] = useState<Project[]>([]);

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

  return (
    <Flex direction="column" gap={4} m={4} w="max" rounded="full">
      {userProj ? (
        userProj.map((value, index) => (
          <Card boxShadow={"dark-lg"} key={index} maxW="md">
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name={user?.email as string}
                    src={user?.img as string}
                  />
                  <Box>
                    <Heading size="sm">{user?.userName}</Heading>
                    <Text>{user?.description}</Text>
                  </Box>
                </Flex>
                <Heading as="h2" size={"lg"}>
                  {value.projectName}
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{value.description}</Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
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
              <Button flex="1" variant="ghost" leftIcon={<BiInfoSquare />}>
                View Project
              </Button>
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
