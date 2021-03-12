import { HStack, Link } from "@chakra-ui/layout";

function Navbar() {
  return (
    <HStack spacing={3} px={10} py={3} boxShadow={"sm"}>
      <Link
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontWeight="extrabold"
        href="/"
      >
        Diego
      </Link>
      <Link fontWeight="extrabold" href="/posts">
        My stuff
      </Link>
    </HStack>
  );
}

export default Navbar;
