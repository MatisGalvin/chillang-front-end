import { Box } from "@chakra-ui/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { shortenString } from "../../helpers/StringFormat/shortenString";
import { customTheme } from "../../styles/theme";
import { IPageLinkItemProps } from "./PageLinkItem.typing";

/**
 * Component that receive a page ID and a page name by the props.
 * With those informations, it create a link in the sidebar.
 */

function PageLinkItem(p: IPageLinkItemProps) {
  let resolved = useResolvedPath("/page/" + p.pageID);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Box
      key={p.pageID}
      marginBottom="3"
      borderRadius={customTheme.border_radius.medium}
      boxShadow="base"
      bg={customTheme.colors.white}
      w="100%"
      p={3}
    >
      <Link
        style={{
          fontWeight: match
            ? customTheme.font_weight.bold
            : customTheme.font_weight.light,
          color: match
            ? customTheme.colors.font_color
            : customTheme.colors.gray,
        }}
        to={"/page/" + p.pageID}
      >
        {shortenString(p.pageName, 7)}
      </Link>
    </Box>
  );
}

export { PageLinkItem };