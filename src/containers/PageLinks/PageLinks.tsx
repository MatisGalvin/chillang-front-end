import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PageLinksProps } from "./PageLinks.typing";

function PageLinks(p: PageLinksProps) {
  return (
    <Box bg="white" w="100%" p={4} color="black">
      {p.pageList.map((page) => {
        return (
          <div key={page._id + page.name}>
            <Link key={page._id} to={"/page/" + page._id}>
              {page.name}
            </Link>
          </div>
        );
      })}
    </Box>
  );
}

export { PageLinks };
