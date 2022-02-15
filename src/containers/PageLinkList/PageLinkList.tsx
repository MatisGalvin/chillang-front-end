import { PageLinkListProps } from "./PageLinkList.typing";
import { PageLinkItem } from "../../components/PageLinkItem/PageLinkItem";

/**
 * Component that creates a list of links based on the pageList received from the props
 */

function PageLinkList(p: PageLinkListProps) {
  return (
    <>
      {p.pageList.map((page) => {
        return (
          <PageLinkItem key={page._id} pageID={page._id} pageName={page.name} />
        );
      })}
    </>
  );
}

export { PageLinkList };
