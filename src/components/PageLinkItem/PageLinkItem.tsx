import { Box } from "@chakra-ui/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { shortenString } from "../../helpers/StringFormat/shortenString";
import { customTheme } from "../../styles/theme";
import { PageLinkItemProps } from "./PageLinkItem.typing";

/**
 * Component that receive a page ID and a page name by the props.
 * With those informations, it create a link in the sidebar.
 */

function PageLinkItem(p: PageLinkItemProps) {
  let resolved = useResolvedPath("/page/" + p.pageID);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Box
      key={p.pageID}
      marginBottom="3"
      borderRadius="lg"
      boxShadow={match ? "md" : "inner"}
      style={
        match
          ? { border: "1px solid rgba(79, 209, 197, 0.5)" }
          : { border: "1px solid rgba(255, 255, 255, 0.3" }
      }
      w="100%"
      p={4}
    >
      <Link
        style={{
          fontWeight: match ? "bold" : "normal",
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
