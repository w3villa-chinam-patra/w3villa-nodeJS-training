import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import routes from "./constants/AppRoutes.js";
import { IsLoggedInProvider } from "./contexts/IsLoggedInContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={`${routes.homeRoute}*`}
          element={
            <IsLoggedInProvider>
              <App />
              <Toaster />
            </IsLoggedInProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
