import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Registration from "../forms/Registration";

export default function ProfileView() {
  const { user } = useContext(AppContext);

  return (
    <>
      <div align="center">
        {user?.token ? <h1>EDIT PROFILE</h1> : <h1>REGISTRATION</h1>}
        <Registration user={user} />
      </div>
    </>
  );
}
