import { useNavigate } from "react-router";
import { useUser } from "../../contexts";
import { AppRoutes } from "../../constants";

function Logout() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(AppRoutes.HOME_ROUTE);
  };

  return (
    <button
      onClick={logoutHandler}
      className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded-full"
    >
      Logout
    </button>
  );
}

export default Logout;
