import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import useBooks from "../hooks/useBooks";
import Error from "./Error";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function SingleBook() {
  const { bookId } = useParams();
  const { book, error } = useBooks(bookId);
  const { readingList, user, addToList, removeOneFromList, setAlert } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleAddToList = (book) => {
    if (user?.token) {
      addToList(book);
      setAlert({
        msg: `BOOK WAS ADDED!`,
        cat: "success",
      });
    } else {
      setAlert({
        msg: "PLEASE LOGIN TO ADD A BOOK",
        cat: "error",
      });
      navigate("/login");
    }
  };

  const handleRemoveOneFromList = (book) => {
    removeOneFromList(book);
    setAlert({
      msg: `BOOK WAS REMOVED`,
      cat: "warning",
    });
  };

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }

  if (!book) {
    return (
      <Box sx={{ display: "flex" }}>
        <h1>BOOK WAS NOT FOUND</h1>
      </Box>
    );
  }

  return (
    <Card
      elevation={5}
      sx={{
        display: "flex",
        width: "50%",
        margin: "auto",
        p: 1,
        mt: 4,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "50%",
          maxHeight: 300,
          objectFit: "contain",
          m: 2,
          p: 2,
          backgroundColor: "#f8f9fa",
        }}
        image={book.img}
        alt={`Cover ${book.title}`}
      />
      <CardContent sx={{ width: "80%" }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
          {book.title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 2 }}
        >
          {book.author}
        </Typography>
        <CardActions
          sx={{ p: 0, mt: 1, justifyContent: "center" }}
          disableSpacing
        >
          {readingList.map((x) => x.id).includes(book.id) ? (
            <Button
              sx={{ margin: "auto", width: "50%" }}
              variant="contained"
              color="secondary"
              aria-label="remove-book"
              onClick={() => {
                handleRemoveOneFromList(book);
              }}
              startIcon={<HeartBrokenRoundedIcon />}
            >
              Remove from List
            </Button>
          ) : (
            <Button
              sx={{ margin: "auto", width: "40%" }}
              variant="contained"
              color="primary"
              aria-label="add-book"
              onClick={() => {
                handleAddToList(book);
              }}
              startIcon={<FavoriteIcon />}
            >
              Add to List
            </Button>
          )}
        </CardActions>
        <br />
        <Divider />
        <br />
        <Typography variant="h6" color="text.secondary">
          <strong>Subject:</strong> {book.subject}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <strong>Pages:</strong> {book.pages}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <strong>Summary:</strong> {book.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}
