import {
  Box,
  Center,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

const Me = () => {
  const years = () => {
    const birthday = new Date(1995, 11, 24);
    const ageDif = new Date(Date.now() - birthday);
    return Math.abs(ageDif.getFullYear() - 1970);
  };
  return (
    <>
      <Head>
        <title>Diego García | About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <VStack p={10} spacing={10} maxW={{ base: "100%", lg: "75%" }}>
          <Box w={"100%"}>
            <Text
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              fontSize={"3xl"}
            >
              "What have you done, Diego?"
            </Text>
          </Box>
          <Text fontSize={{ base: "3xl", md: "2xl" }}>
            Well, this is a very complex question. I am {years()} (no, this
            isn't outdated, it changes automatically{" "}
            <Image
              display="initial"
              w={{ base: "1.875rem", md: "1.5rem" }}
              p={0}
              m={0}
              src="/magic.gif"
            ></Image>
            ). I am currently working at{" "}
            <Link isExternal={true} href="https://thecolvinco.com">
              Colvin
            </Link>
            , doing mostly backend stuff. The tech stack we have won't catch you
            by surprise:
            <UnorderedList pl="3">
              <ListItem>PHP 🐘 & Symfony</ListItem>
              <ListItem>Next JS</ListItem>
              <ListItem>Docker 🐳</ListItem>
              <ListItem>CirclceCI</ListItem>
              <ListItem>Github Actions</ListItem>
              <ListItem>Rabbit MQ 🐰</ListItem>
              <ListItem>...</ListItem>
            </UnorderedList>
          </Text>
          <Text fontSize={{ base: "3xl", md: "2xl" }}>
            In terms of architecture, I have learned some things about Hexagonal
            Architecture, SOLID Principles, TDD, Domain Driven Design, CQRS and
            Event Sourcing... experiencing almost all of them in production
            environments, and understanding both their benefits and pains. I'd
            like to write something about this some day!
          </Text>
          <Text width="100%" fontSize={{ base: "3xl", md: "2xl" }}>
            You can read more info about me at my{" "}
            <Link
              isExternal={true}
              href="https://www.linkedin.com/in/diego-garcia-garcia/"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link isExternal={true} href="https://github.com/garciasdos">
              Github
            </Link>{" "}
            pages.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default Me;
