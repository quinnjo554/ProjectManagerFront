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
import { BiInfoSquare, BiShare, BiBookmark } from "react-icons/bi";
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
  } = useProjectList(user?.userId);

  if (userLoading || userProjLoading) {
    return <Spinner />;
  }

  if (userError || userProjError) {
    return <p>Error occurred while fetching data</p>;
  }
  console.log(user);
  return (
    <Flex direction="column" gap={4} m={4} w="max" rounded="full">
      {userProj && user ? (
        userProj.map((value, index) => (
          <Card boxShadow={"dark-lg"} key={index} maxW="md">
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={user?.userName ?? ""} src={user?.img ?? ""} />
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
