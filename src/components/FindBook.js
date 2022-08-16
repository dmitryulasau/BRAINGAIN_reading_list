import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function FindBook() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 400,
        margin: "auto",
        marginTop: "15vh",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter A Book Name"
        inputProps={{ "aria-label": "search a book" }}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
