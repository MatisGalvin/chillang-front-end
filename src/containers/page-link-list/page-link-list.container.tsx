import { PageLinkItem } from "components";
import { IPage } from "typings";
/**
 * Component that creates a list of links based on the pageList received from the props
 */

function PageLinkList(p: { pageList: IPage[] }) {
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
