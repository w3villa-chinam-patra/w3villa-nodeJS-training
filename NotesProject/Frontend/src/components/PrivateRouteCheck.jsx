import React from "react";
import { Navigate, Outlet } from "react-router";
import AppRoutes from "../constants/AppRoutes";

function PrivateRouteCheck() {
  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.loginRoute} />
  );
}

export default PrivateRouteCheck;
