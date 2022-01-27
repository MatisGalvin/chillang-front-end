import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page } from "../../components/Page/Page";
import { Home } from "../../pages/Home/Home";
import { NotFound404 } from "../../pages/NotFound404/NotFound404";

function Workspace() {
  return (
    <>
      <h1>WORKSPACE</h1>
      <Routes>
        <Route path="/page/:id" element={<Page />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export { Workspace };
