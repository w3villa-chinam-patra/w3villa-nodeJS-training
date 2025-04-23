import { useState } from "react";
import { AppRoutes, SuccessMessages } from "../../constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { LuLoaderCircle } from "react-icons/lu";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function onChangeHandler(event) {
    setRegistrationData({
      ...registrationData,
      [event.target.id]: event.target.value,
    });
  }
  const registerHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:1337/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(SuccessMessages.AUTH.REGISTER_SUCCESS);
        navigate(AppRoutes.LOGIN_ROUTE);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setRegistrationData({
        name: "",
        email: "",
        password: "",
      });
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center h-full items-center">
      <form
        onSubmit={registerHandler}
        className="p-12 bg-white rounded-2xl border border-amber-600 text-gray-600"
      >
        <h1 className="text-4xl text-amber-700 mb-8">Register</h1>
        <div className="input-field my-2">
          <label htmlFor="name">Enter your name</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={registrationData.name}
            className="border outline-none bg-amber-50 rounded-2xl py-1 px-2"
            id="name"
            type="text"
          />
        </div>
        <div className="input-field my-2">
          <label htmlFor="email">Enter email</label>
          <br />
          <input
            onChange={onChangeHandler}
            value={registrationData.email}
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
            value={registrationData.password}
            className="border outline-none bg-amber-50 rounded-2xl py-1 px-2"
            id="password"
            type="password"
          />
        </div>
        <div className="button-container flex justify-center">
          <button
            onClick={registerHandler}
            className="bg-amber-600 flex items-center gap-2 text-white py-2 px-4 mt-8 rounded-sm cursor-pointer"
            type="submit"
          >
            Register
            {isLoading ? <LuLoaderCircle className="animate-spin" /> : <></>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
