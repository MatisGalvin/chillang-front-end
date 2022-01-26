import { Box, Text } from "@chakra-ui/react";
import { PageProps } from "./Page.typing";

function Page(p: PageProps) {
  return (
    <Box bg="tomato" w="100%" p={4} color="black">
      {p.pageList.map((page) => (
        <Text>
          <a href="#">{page.name}</a>
        </Text>
      ))}
    </Box>
  );
}

export { Page };
