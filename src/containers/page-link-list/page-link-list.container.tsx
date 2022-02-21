import { PageLinkItem } from "components";
import { useAppDispatch, setCurrentPageIndex } from "models";
import { IPage } from "typings";
/**
 * Component that creates a list of links based on the pageList received from the props
 */

function PageLinkList(p: { pageList: IPage[] }) {
  const dispatch = useAppDispatch();

  return (
    <>
      {p.pageList.map((page, pageIndex) => {
        return (
          <PageLinkItem
            onClick={() => {
              dispatch(setCurrentPageIndex(pageIndex));
            }}
            key={page._id}
            pageID={page._id}
            pageName={page.name}
          />
        );
      })}
    </>
  );
}

export { PageLinkList };
