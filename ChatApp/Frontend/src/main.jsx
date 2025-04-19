import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes } from "./constants/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${AppRoutes.HOME}*`} element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
