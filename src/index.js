import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import CustomThemeProvider from "./context/ThemeContext";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <AppContextProvider>
          <CssBaseline />
          <App />
        </AppContextProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
