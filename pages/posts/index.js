import {
  Box,
  Button,
  Center,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import useSWR, { mutate } from "swr";
import WavingHandIcon from "../../components/icons/HandShaking";
import PartyingFace from "../../components/icons/PartyingFace";
import fetcher from "../../utils/fetcher";

const Home = () => {
  const { data: joke } = useSWR("/api/jokes", fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <Head>
        <title>Diego García | Posts</title>
        <link rel="icon" href="/icon/favicon.ico" />
        <meta property="og:description" content="Diego García blog posts" />
        <meta property="og:type" content="website" />
        <meta property="twitter:creator" content="@dgarcias156" />
        <meta property="og:image" content="/avatar.png" />
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
              Posts
            </Text>
          </Box>
          <VStack spacing={4}>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Here you will find different posts about any type of thoughts 💭
              (or at least this is the main idea 💡, we'll see). While I'm
              writing something interesting, I'll leave something funny here.
            </Text>
            {joke && (
              <>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontStyle="italic"
                  fontSize="2xl"
                  color="gray.600"
                >
                  {joke.joke}
                </Text>
                <Link
                  fontSize="xl"
                  fontWeight="extrabold"
                  onClick={() => {
                    mutate("/api/jokes");
                  }}
                >
                  Reload
                </Link>
              </>
            )}
          </VStack>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
