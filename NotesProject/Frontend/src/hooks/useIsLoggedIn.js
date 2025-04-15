import { useContext } from "react";
import { IsLoggedInContext } from "../contexts/IsLoggedInContext.jsx";

const useIsLoggedIn = () => {
  return useContext(IsLoggedInContext);
};

export default useIsLoggedIn;
