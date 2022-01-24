import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Workspace } from "./containers/Workspace/Workspace";
import { Sidebar } from "./containers/Sidebar/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Sidebar />
      <Workspace />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
