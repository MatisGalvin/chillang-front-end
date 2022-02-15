import { Route, Routes } from "react-router-dom";
import { Page, NotFound404, Home, ProjectList } from "pages";
import { IProject } from "typings";

/**
 * It contains only routes that display a "Page" component or a "Home" component or a "NotFound404" component.
 * It will display the right component if the url match with the given path.
 *
 */

function Workspace(p: { project: IProject | undefined }) {
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
