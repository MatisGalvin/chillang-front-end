import { Route, Routes } from "react-router-dom";
import { Page } from "../../components/Page/Page";
import { Home } from "../../pages/Home/Home";
import { NotFound404 } from "../../pages/NotFound404/NotFound404";

/**
 * It contains only routes that display a "Page" component or a "Home" component or a "NotFound404" component.
 * It will display the right component if the url match with the given path.
 *
 */

function Workspace() {
  return (
    <Routes>
      <Route path="/page/:id" element={<Page />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export { Workspace };
