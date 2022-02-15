import { Route, Routes } from "react-router-dom";
import { Page } from "../../pages/Page/Page";
import { Home } from "../../pages/Home/Home";
import { NotFound404 } from "../../pages/NotFound404/NotFound404";
import { IWorkspaceProps } from "./Workspace.typing";
import { ProjectList } from "../../pages/ProjectList/ProjectList";

/**
 * It contains only routes that display a "Page" component or a "Home" component or a "NotFound404" component.
 * It will display the right component if the url match with the given path.
 *
 */

function Workspace(p: IWorkspaceProps) {
  if (p.project !== undefined) {
    return (
      <Routes>
        <Route
          path="/page/:_id"
          element={<Page supportedLanguages={p.project.supportedLanguages} />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={<ProjectList projectList={p.project} />}
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/newProject"
          element={<ProjectList projectList={p.project} />}
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    );
  }
}

export { Workspace };
