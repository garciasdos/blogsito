import { extendTheme } from "@chakra-ui/react";

const Link = {
  baseStyle: {
    // color: "purple.500",
  },
};

const theme = extendTheme({
  components: {
    Link,
  },
});

export default theme;
