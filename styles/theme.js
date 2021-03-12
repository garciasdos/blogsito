import { extendTheme } from "@chakra-ui/react";

const Link = {
  baseStyle: {
    color: "#FF0080",
    fontWeight: "bold",
  },
};

const theme = extendTheme({
  components: {
    Link,
  },
});

export default theme;
