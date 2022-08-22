import { Navigate } from "react-router-dom";
import ReadingList from "../../src/ReadingList/ReadingList";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

export default function ListPage() {
  const { readingList, user, setAlert, emptyList } = useContext(AppContext);

  if (user.token) {
    if (readingList.length < 1) {
      return (
        <div align="center">
          <h1>PLEASE ADD A BOOK TO SEE YOUR FAVORITES</h1>
          <img
            src="https://res.cloudinary.com/dulasau/image/upload/v1661124237/200_pynmoq.gif"
            width={900}
            height={"80%"}
            alt="Sponge bob with a book"
          ></img>
        </div>
      );
    } else {
      return (
        <>
          <h1 align="center">{user.first_name.toUpperCase()}'S FAVOURITES</h1>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ margin: "auto", width: "20%", mb: 5 }}
              variant="contained"
              color="error"
              aria-label="add-book"
              onClick={() => {
                emptyList();
              }}
              startIcon={<DeleteForeverRoundedIcon />}
            >
              EMPTY READING LIST
            </Button>
          </Typography>
          <ReadingList />
        </>
      );
    }
  } else {
    setAlert({ msg: "PLEASE  LOGIN", cat: "error" });
    return <Navigate to={"/login"} />;
  }
}
