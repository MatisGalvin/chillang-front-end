import { Box, Grid, GridItem } from "@chakra-ui/react";
import { customTheme } from "../../styles/theme";
import { PageLinkListProps } from "./PageLinkList.typing";
import { PageLinkItem } from "../../components/PageLinkItem/PageLinkItem";

function PageLinkList(p: PageLinkListProps) {
  return (
    <>
      {p.pageList.map((page) => {
        return (
          <Box
            key={page._id}
            marginBottom="3"
            borderRadius={customTheme.border_radius.medium}
            boxShadow="base"
            bg={customTheme.colors.white}
            w="100%"
            p={3}
          >
            <Grid templateColumns="3fr 7fr">
              <GridItem>
                <PageLinkItem page={page} />
              </GridItem>
              <GridItem></GridItem>
            </Grid>
          </Box>
        );
      })}
    </>
  );
}

export { PageLinkList };
