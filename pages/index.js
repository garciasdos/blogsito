import { Box, Center, Image, Link, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import WavingHandIcon from "../components/icons/HandShaking";
import PartyingFace from "../components/icons/PartyingFace";

const Home = () => {
  return (
    <>
      <Head>
        <title>Diego García</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <VStack p={10} spacing={10} maxW={{ base: "100%", lg: "75%" }}>
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://pbs.twimg.com/profile_images/1267532857926389765/RYIFz5qv_400x400.jpg"
              alt="Diego García"
            />
          </Box>

          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            fontSize={"3xl"}
            textAlign={{ base: "left" }}
          >
            Hello! <WavingHandIcon fontSize="3xl" /> I'm Diego García. I'm
            (mainly) a Software Developer who believes that things can really be
            done right <PartyingFace />
          </Text>
          <Text fontSize={{ base: "2xl", md: "2xl" }}>
            I enjoy programming and I try to demonstrate it in the code I write.
            I'm a big fan of terms like <Text as="b">DDD</Text>,{" "}
            <Text as="b">CQRS</Text>, <Text as="b">Event Sourcing</Text>... But
            always taking into account if it really makes sense in the given
            scenario.
          </Text>
          <Text fontSize={{ base: "2xl", md: "2xl" }}>
            For that, in my opinion it's essential to work hand in hand with the
            Product people (
            <Text as="i">
              here I should write words like <Text as="b">Agile</Text>,{" "}
              <Text as="b">SCRUM</Text>... or whatever methodology that
              facilitates the communication between both departments
            </Text>
            ). If you think any of these things make sense, you can read more
            about me{" "}
            <Link fontWeight="bold" href="/me">
              here.
            </Link>
          </Text>
          <Box w={"100%"}></Box>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
