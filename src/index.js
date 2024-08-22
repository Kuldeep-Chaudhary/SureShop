import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { UIProvider } from "./context/ui";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UIProvider>
          <BrowserRouter><App /></BrowserRouter>   
      </UIProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
