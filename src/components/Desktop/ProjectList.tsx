import { Project } from "@/models/Project";
import { getUserProj, useProjectList, useUser } from "@/hooks/getQueries";
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
  Link,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BiInfoSquare, BiBookmark } from "react-icons/bi";
import TaskList from "./TaskList";
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
  } = useProjectList(user?.user_id ?? "2");

  if (userLoading || userProjLoading) {
    return <Spinner />;
  }

  if (userError) {
    return <p>Error occurred while fetching data</p>;
  }
  if (userProjError) {
    return <p>Error from userProj</p>;
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
            size={"sm"}
          >
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={user?.username ?? ""} src={user?.img ?? ""} />
                  <Box>
                    <Heading size="sm">{user.username}</Heading>
                    <Text>{user?.description}</Text>
                  </Box>
                </Flex>
                <Box
                  bg={"linkedin.500"}
                  px={8}
                  rounded={"2xl"}
                  textColor="white"
                  py={2}
                  w={"max"}
                  position="relative"
                  top={"0"}
                  right={"-10"}
                >
                  <Heading as="h2" size={"lg"}>
                    {value.project_name.split(" ")[0]}
                  </Heading>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Tooltip label={value.description} hasArrow rounded={"md"}>
                <Text
                  isTruncated
                  boxShadow={"lg"}
                  maxH={"100px"}
                  p="3"
                  rounded="md"
                >
                  {value.description}
                </Text>
              </Tooltip>
            </CardBody>
            <TaskList projectId={String(value.project_id)}></TaskList>
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
              <Button
                as={Link}
                href={`/project/${value.project_id}`}
                flex="1"
                variant="ghost"
                leftIcon={<BiInfoSquare />}
              >
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
