import { Navigate, Outlet } from "react-router";
import { useUser } from "../contexts/UserContext";
import { AppRoutes } from "../constants";
import { useEffect } from "react";

function CheckAuthentication() {
  const { user, setUser } = useUser();
  useEffect(() => {
    if (!user) {
      if (localStorage.getItem("token") && localStorage.getItem("user")) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }
    }
  }, []);

  return localStorage.getItem("token") && localStorage.getItem("user") ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.LOGIN_ROUTE} />
  );
}
export default CheckAuthentication;
