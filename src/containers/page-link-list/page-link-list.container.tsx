import { PageLinkListProps } from "./page-link-list.container.typing";
import { PageLinkItem } from "../../components/page-link-item/page-link-item.component";

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
