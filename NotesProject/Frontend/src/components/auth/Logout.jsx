import { useNavigate } from "react-router";
import { AppRoutes, SuccessMessages } from "../../constants";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import toast from "react-hot-toast";

function Logout() {
  const { setIsLoggedIn } = useIsLoggedIn();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    toast.success(SuccessMessages.AUTH.LOGOUT_SUCCESS);
    navigate(AppRoutes.homeRoute);
  };
  return (
    <button
      onClick={logoutHandler}
      className="mx-1 bg-cyan-600 px-4 py-1 rounded-xl border-2 border-cyan-500 cursor-pointer"
    >
      Logout
    </button>
  );
}

export default Logout;
