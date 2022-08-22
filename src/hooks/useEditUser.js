import { useContext, useEffect } from "react";
import apiUser from "../api/apiUser";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function useEditUser(data) {
  const { user, setAlert } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    let response;
    const source = CancelToken.source();
    if (user?.token && data?.first_name) {
      (async () => {
        response = await apiUser.put(user.token, data, source.token);
        if (response) {
          setAlert({
            msg: `Updated! Re login to see changes`,
            cat: "info",
          });

          navigate("/profile");
        } else {
          setAlert({ msg: "AN UNEXPECTED ERROR!", cat: "error" });
        }
      })();
    }
    return () => {
      source.cancel();
    };
  }, [user?.token, user?.user_id, data, setAlert, navigate]);
}
