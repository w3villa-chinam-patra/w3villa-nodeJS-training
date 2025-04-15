import { useState } from "react";
import { useNavigate } from "react-router";
import AppRoutes from "../../constants/AppRoutes";
import toast from "react-hot-toast";
import { LuLoaderCircle } from "react-icons/lu";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { SuccessMessages } from "../../constants";

function Login() {
  const { setIsLoggedIn } = useIsLoggedIn();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
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
      const response = await fetch(`http://localhost:4000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("name", data.data.name);
        setIsLoggedIn(true);
        toast.success(SuccessMessages.AUTH.LOGIN_SUCCESS);
        navigate(AppRoutes.noteRoute);
      } else {
        console.log();
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoginData({
        username: "",
        password: "",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center m-8">
      <form
        action=""
        className="p-12 bg-white rounded-2xl border border-cyan-600 text-gray-600"
      >
        <h1 className="text-4xl text-cyan-700 mb-8">Login</h1>
        <div className="input-field my-2">
          <label htmlFor="username">Enter username</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={loginData.username}
            className="border outline-none bg-cyan-50 rounded-2xl py-1 px-2"
            id="username"
            type="text"
          />
        </div>
        <div className="input-field my-2">
          <label htmlFor="password">Enter password</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={loginData.password}
            className="border outline-none bg-cyan-50 rounded-2xl py-1 px-2"
            id="password"
            type="password"
          />
        </div>
        <div className="button-container flex justify-center">
          <button
            onClick={loginHandler}
            className="bg-cyan-600 flex items-center gap-2 text-white py-2 px-4 mt-8 rounded-sm cursor-pointer"
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
