import { useState } from "react";
import { useNavigate } from "react-router";
import AppRoutes from "../../constants/AppRoutes";
import toast from "react-hot-toast";
import { LuLoaderCircle } from "react-icons/lu";
// import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { SuccessMessages } from "../../constants";
import { useUser } from "../../contexts";

function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  function onChangeHandler(event) {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  }
  const loginHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:1337/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        setUser(data.data.user);
        toast.success(SuccessMessages.AUTH.LOGIN_SUCCESS);
        navigate(AppRoutes.BLOGS_ROUTE);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoginData({
        email: "",
        password: "",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center h-full items-center">
      <form
        action=""
        className="p-12 bg-white rounded-2xl border border-amber-600 text-gray-600"
      >
        <h1 className="text-4xl text-amber-700 mb-8">Login</h1>
        <div className="input-field my-2">
          <label htmlFor="email">Enter email</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={loginData.email}
            className="border outline-none bg-amber-50 rounded-2xl py-1 px-2"
            id="email"
            type="text"
          />
        </div>
        <div className="input-field my-2">
          <label htmlFor="password">Enter password</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={loginData.password}
            className="border outline-none bg-amber-50 rounded-2xl py-1 px-2"
            id="password"
            type="password"
          />
        </div>
        <div className="button-container flex justify-center">
          <button
            onClick={loginHandler}
            className="bg-amber-600 flex items-center gap-2 text-white py-2 px-4 mt-8 rounded-sm cursor-pointer"
            type="submit"
          >
            Login
            {isLoading ? <LuLoaderCircle className="animate-spin" /> : <></>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
