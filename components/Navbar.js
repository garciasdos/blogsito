import { HStack } from "@chakra-ui/layout";
import Link from "./Link";

function Navbar() {
  return (
    <HStack spacing={3} px={10} py={3} boxShadow={"sm"}>
      <Link
        href="/"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Diego
      </Link>
      <Link fontWeight="extrabold" href="/me" color="black">
        My stuff
      </Link>
      <Link fontWeight="extrabold" href="/posts" color="black">
        Posts
      </Link>
    </HStack>
  );
}

export default Navbar;
