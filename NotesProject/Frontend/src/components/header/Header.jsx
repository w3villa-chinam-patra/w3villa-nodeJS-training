import { useState } from "react";
import { Link } from "react-router";
import { AppRoutes } from "../../constants/";
import Logout from "../auth/Logout";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

function Header() {
  const { isLoggedIn } = useIsLoggedIn();
  return (
    <div className="bg-cyan-700 py-2 px-5 text-white">
      <div className="container flex justify-between items-center mx-auto">
        <Link to={`${AppRoutes.homeRoute}`} className="text-3xl">
          <img src="/notes.png" alt="logo" className="h-12" />
          Notes
        </Link>

        {isLoggedIn ? (
          <div className="user-details flex gap-4 ">
            <img className="h-18" src="/user.png" alt="user" />
            <div className="name-logout-button-container flex flex-col gap-2 items-center">
              <div className="name text-xl font-bold">
                {localStorage.getItem("name")}
              </div>
              <div className="buttons flex">
                <Logout />
                <Link
                  to={AppRoutes.noteRoute}
                  className="mx-1 bg-cyan-600 px-4 py-1 rounded-xl border-2 border-cyan-500 cursor-pointer"
                >
                  My Notes
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="buttons">
            <Link
              to={`${AppRoutes.loginRoute}`}
              className="mx-1 bg-cyan-600 px-4 py-2 rounded-xl border-2 border-cyan-500 cursor-pointer"
            >
              Login
            </Link>
            <Link
              to={`${AppRoutes.registerRoute}`}
              className="mx-1 bg-cyan-600 px-4 py-2 rounded-xl border-2 border-cyan-500 cursor-pointer"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
