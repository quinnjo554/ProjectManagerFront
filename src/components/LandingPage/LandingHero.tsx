import { Box, Heading, Text, Image } from "@chakra-ui/react";
import SideImg from "../../../public/PlayOnComputerAtwindow.jpg";
import Laptop from "../../../public/blog.png";
function LandingHero() {
  return (
    <Box zIndex={"-1"} top="0" w="100%" h="100vh" className="landing">
      <Box
        w="100%"
        h="41rem"
        className="bannerOne"
        borderRadius="lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="4rem"
      >
        <Box w="35%" ml={"46"} textColor="white">
          <Heading fontSize="6xl" mb="5">
            Track Your Project
          </Heading>
          <Text fontSize="2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            deserunt alias incidunt commodi laudantium, saepe voluptate cumque
            repudiandae, magnam, iure quibusdam ipsam molestiae. Nostrum
            repellat, natus nisi eos vero eligendi!
          </Text>
        </Box>
        <Image
          src={SideImg.src}
          display="block"
          float="right"
          w="32%"
          h="100%"
          mt="4rem"
          ml="4rem"
          rounded="full"
        />
      </Box>

      <Box
        h="30rem"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="8rem"
      >
        <Box ml="64">
          <Image w="12rem" h="12rem" src={Laptop.src}></Image>
        </Box>
        <Box textAlign="right" mt={"-2"} maxW="50%">
          <Heading mr={"4"} mb={"3"}>
            Work On Projects As A Team
          </Heading>
          <Text w={"35rem"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            deserunt alias incidunt commodi laudantium, saepe voluptate cumque
            repudiandae, magnam, iure quibusdam ipsam molestiae.
          </Text>
        </Box>
      </Box>

      <Box
        h="20rem"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="8rem"
      >
        <Box ml="36">
          <Heading mr={"4"} mb={"3"}>
            Work On Projects As A Team
          </Heading>
          <Text w={"35rem"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            deserunt alias incidunt commodi laudantium, saepe voluptate cumque
            repudiandae, magnam, iure quibusdam ipsam molestiae.
          </Text>
        </Box>
        <Box textAlign="right" mr={"52"} mt={"-2"} maxW="50%">
          <Image w="12rem" h="12rem" src={Laptop.src}></Image>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingHero;
