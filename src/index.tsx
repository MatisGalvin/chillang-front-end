import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n/";
import { customTheme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
