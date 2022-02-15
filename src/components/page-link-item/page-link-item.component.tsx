import { shortenString } from "../../helpers/string-utils";
import { BoxLink } from "../box-link/box-link.component";
import { PageLinkItemProps } from "./page-link-item.component.typing";

/**
 * Component that receive a page ID and a page name by the props.
 * With those informations, it create a link in the sidebar.
 */

function PageLinkItem(p: PageLinkItemProps) {
  const link = "/page/" + p.pageID;

  return (
    <BoxLink link={link} key={p.pageID} title={shortenString(p.pageName, 7)} />
  );
}

export { PageLinkItem };
