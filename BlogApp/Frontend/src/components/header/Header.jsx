import { Link } from "react-router";
import { AppRoutes } from "../../constants";
import { useUser } from "../../contexts";
import { FaUser } from "react-icons/fa6";
import Logout from "../auth/Logout";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userInContext = useUser().user;
  return (
    <div className="wrapper bg-neutral-100">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <Link to={AppRoutes.HOME_ROUTE} className="logo text-4xl">
          <span className="font-thin">Blog</span>
          <span className="font-black">Verse</span>
        </Link>
        {user || userInContext ? (
          <div className="flex gap-3 border border-amber-300 bg-amber-100 p-1 pr-2 rounded-full items-center">
            <FaUser className="text-5xl bg-white border border-gray-300 p-1 rounded-full" />
            <div className="name">{user.name}</div>
            <Logout />
          </div>
        ) : (
          <ul className="buttons flex items-center text-lg gap-4">
            <Link
              to={AppRoutes.LOGIN_ROUTE}
              className="cursor-pointer px-6 py-2 bg-amber-500 text-white rounded-full"
            >
              Login
            </Link>
            <Link
              to={AppRoutes.REGISTER_ROUTE}
              className="cursor-pointer px-6 py-2 bg-amber-500 text-white rounded-full"
            >
              SingUp
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
