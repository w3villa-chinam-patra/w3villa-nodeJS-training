import { Outlet } from "react-router";
import { Header } from "../components";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
