import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { shortenString } from "../../helpers/StringFormat/shortenString";
import { customTheme } from "../../styles/theme";
import { IPageLinkItemProps } from "./PageLinkItem.typing";

function PageLinkItem(p: IPageLinkItemProps) {
  let resolved = useResolvedPath("/page/" + p.page._id);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        fontWeight: match
          ? customTheme.font_weight.bold
          : customTheme.font_weight.light,
        color: match ? customTheme.colors.font_color : customTheme.colors.gray,
      }}
      to={"/page/" + p.page._id}
    >
      {shortenString(p.page.name, 7)}
    </Link>
  );
}

export { PageLinkItem };
