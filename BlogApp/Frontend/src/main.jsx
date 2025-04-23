import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import AppRoutes from "./constants/AppRoutes.js";
import { UserProvider } from "./contexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={`${AppRoutes.HOME_ROUTE}*`}
          element={
            <UserProvider>
              <App />
              <Toaster />
            </UserProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
