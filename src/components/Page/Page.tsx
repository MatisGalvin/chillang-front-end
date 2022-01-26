import { Box, Text } from "@chakra-ui/react";
import { PageProps } from "./Page.typing";

function Page(p: PageProps) {
  return (
    <Box bg="tomato" w="100%" p={4} color="black">
      <Text>
        <a href="#">{p.pageList[0].name}</a>
      </Text>
      {console.log(p)}
    </Box>
  );
}

export { Page };
