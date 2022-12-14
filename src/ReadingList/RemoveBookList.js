import MuiButton from "@mui/material/Button";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import { useContext } from "react";
import { AppContext } from "../../src/context/AppContext";

export default function RemoveBookList({ book }) {
  const { removeBook } = useContext(AppContext);

  return (
    <>
      <MuiButton
        sx={{ minWidth: "40%" }}
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
