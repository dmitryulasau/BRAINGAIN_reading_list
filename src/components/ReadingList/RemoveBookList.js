import MuiButton from "@mui/material/Button";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function RemoveBookList({ book }) {
  const { removeBook } = useContext(AppContext);

  return (
    <>
      <MuiButton
        sx={{ width: "40%" }}
        color="secondary"
        aria-label="remove book"
        variant="contained"
        onClick={() => {
          removeBook(book);
        }}
        startIcon={<HeartBrokenRoundedIcon />}
      >
        Remove
      </MuiButton>
    </>
  );
}
