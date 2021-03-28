import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";

function Link(props) {
  return (
    <NextLink href={props.href}>
      <ChakraLink {...props}></ChakraLink>
    </NextLink>
  );
}

export default Link;
