import { useContext, useEffect } from "react";
import apiUser from "../api/apiUser";
import { CancelToken } from "apisauce";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function useLogin(loginData, setLoginCreds, setError, setUser) {
  const navigate = useNavigate();
  const { setAlert } = useContext(AppContext);

  useEffect(() => {
    const source = CancelToken.source();
    if (loginData.email && loginData.password) {
      const login = async (cancelToken) => {
        const response = await apiUser.get(
          loginData.email,
          loginData.password,
          cancelToken
        );
        if (response.user?.token) {
          setAlert({ msg: "You are now logged in!", cat: "success" });
          setUser(response.user);
          setLoginCreds({});
          navigate("/collection");
        }
        setError(response.error);
      };
      login(source.token);
    }
    return () => {
      source.cancel();
    };
  }, [loginData, setLoginCreds, setError, setUser, navigate, setAlert]);
}
