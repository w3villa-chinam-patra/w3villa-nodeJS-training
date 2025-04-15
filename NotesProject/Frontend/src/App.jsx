import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AppRoutes from "./constants/AppRoutes";
import PrivateRouteCheck from "./components/PrivateRouteCheck";
import NotesSection from "./components/notes-section/NotesSection";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") && true
  );
  return (
    <Routes>
      <Route element={<Layout  />}>
        <Route index element={<Home />} />
        <Route path={`${AppRoutes.registerRoute}`} element={<Register />} />
        <Route path={`${AppRoutes.loginRoute}`} element={<Login />} />
        <Route
          path={`${AppRoutes.noteRoute}/*`}
          element={<PrivateRouteCheck />}
        >
          <Route index element={<NotesSection />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
