import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./constants/index.js";
import { OtherUserProvider, UserProvider } from "./contexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={`${AppRoutes.HOME_ROUTE}*`}
          element={
            <>
              <OtherUserProvider>
                <UserProvider>
                  <App />
                </UserProvider>
              </OtherUserProvider>
              <Toaster />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
