import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
