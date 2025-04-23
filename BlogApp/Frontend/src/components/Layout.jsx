import { Outlet } from "react-router";
import { Header } from "../components";
import { useUser } from "../contexts";
import { useEffect } from "react";

function Layout() {
  const { setUser } = useUser();
  const setUserInContextHandler = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  };
  useEffect(() => {
    setUserInContextHandler();
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
