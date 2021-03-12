import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
