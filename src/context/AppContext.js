import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // USER
  const getUserFromLS = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
  };

  const [user, _setUser] = useState(getUserFromLS());

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    _setUser(user);
  };

  // ALERTS
  const [alert, setAlert] = useState({});

  // VALUES
  const values = {
    alert,
    setAlert,
    user,
    setUser,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
