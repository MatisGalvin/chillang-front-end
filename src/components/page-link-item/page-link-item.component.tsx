import { shortenString } from "helpers";
import { BoxLink } from "components";

/**
 * Component that receive a page ID and a page name by the props.
 * With those informations, it create a link in the sidebar.
 */

function PageLinkItem(p: {
  pageID: string;
  pageName: string;
  onClick?: () => void;
}) {
  const link = "/page/" + p.pageID;

  return (
    <BoxLink
      onClick={p.onClick}
      link={link}
      key={p.pageID}
      title={shortenString(p.pageName, 7)}
    />
  );
}

export { PageLinkItem };
