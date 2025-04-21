import { createContext, useContext, useState } from "react";

const OtherUserContext = createContext();

export const OtherUserProvider = ({ children }) => {
  const [otherUser, setOtherUser] = useState();
  return (
    <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
      {children}
    </OtherUserContext.Provider>
  );
};

export const useOtherUser = () => useContext(OtherUserContext);
