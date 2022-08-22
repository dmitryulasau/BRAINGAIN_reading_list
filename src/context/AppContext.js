import { createContext, useEffect, useReducer, useState } from "react";
import { bookActionReducer, listActions } from "../reducers/bookActionReducer";
import useBooks from "../hooks/useBooks";

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

  // Context for BOOKS
  let { error, books } = useBooks();

  // Context for READING LIST
  const getListFromLS = () => {
    let readingList = localStorage.getItem("readingList");
    if (readingList) {
      return JSON.parse(readingList);
    }
  };

  const [readingList, dispatch] = useReducer(
    bookActionReducer,
    getListFromLS() ?? []
  );

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  // ALERTS
  const [alert, setAlert] = useState({});

  // VALUES
  const values = {
    alert,
    setAlert,
    user,
    setUser,
    books,
    error,

    readingList,
    addToList: (book) => {
      dispatch({ type: listActions.addToList, book });
    },
    addMultipleToList: (book) => {
      dispatch({ type: listActions.addMultipleToList, book });
    },
    removeOneFromList: (book) => {
      dispatch({ type: listActions.removeOneFromList, book });
    },
    removeBook: (book) => {
      dispatch({ type: listActions.removeBook, book });
    },
    emptyList: () => {
      dispatch({ type: listActions.emptyList });
    },
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
