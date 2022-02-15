import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n/";
import { Route, Routes } from "react-router-dom";
import { Sandbox } from "./pages/Sandbox/Sandbox";
import { App } from "./app";
import { Provider } from "react-redux";
import { store } from "./redux/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ChakraProvider>
            <CSSReset />
            <Routes>
              {process.env.NODE_ENV === "development" && (
                <Route path="/sandbox" element={<Sandbox />} />
              )}

              <Route path="*" element={<App />} />
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
