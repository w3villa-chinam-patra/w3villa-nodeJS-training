import "./App.css";
import {
  ChatRoom,
  Home,
  Layout,
  Login,
  Register,
  CheckAuthentication,
} from "./components";
import { Route, Routes } from "react-router";
import { AppRoutes } from "./constants";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME_ROUTE} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.REGISTER_ROUTE} element={<Register />} />
        <Route path={AppRoutes.LOGIN_ROUTE} element={<Login />} />
        <Route element={<CheckAuthentication />}>
          <Route path={`${AppRoutes.CHAT_APP_ROUTE}`} element={<ChatRoom />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
