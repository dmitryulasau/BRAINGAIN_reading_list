import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";

export default function GetRequest() {
  const { addToList, removeOneFromList, readingList, setAlert, user } =
    useContext(AppContext);

  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  // ADDING BOOK TO THE LIST
  const handleAddToList = (book) => {
    if (user?.token) {
      addToList(book);
      setAlert({
        msg: `BOOK WAS ADDED!`,
        cat: "success",
      });
    } else {
      setAlert({
        msg: "PLEASE LOGIN TO ADD BOOKS",
        cat: "error",
      });
      navigate("/login");
    }
  };
  // REMOVE BOOK FROM THE LIST
  const handleRemoveOneFromList = (book) => {
    removeOneFromList(book);
    setAlert({
      msg: `BOOK WAS REMOVED`,
      cat: "warning",
    });
  };

  useEffect(() => {
    const baseURL = "https://cae-bookstore.herokuapp.com/book";

    axios.get(baseURL).then((response) => {
      setBook(response.data.books);
    });
  }, []);

  return (
    <>
      <Container
        maxWidth="xl
      "
        sx={{ margin: "auto", maxWidth: "1200px", mb: 5 }}
      >
        <h1 align="center">BOOKS COLLECTION</h1>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
        >
          {book.map((book) => (
            <Card
              key={book.id}
              raised
              sx={{
                maxWidth: 280,
                Height: 400,
                margin: "auto",
                marginTop: "2vh",
              }}
            >
              <CardActionArea
                onClick={() => {
                  navigate("/book/" + book.id);
                }}
              >
                <CardHeader
                  sx={{
                    height: 180,
                    display: "flex",
                    alignItems: "flex-start",
                    // backgroundColor: "primary.light",
                    // color: "warning.main",
                    fontWeight: 700,
                  }}
                  title={book.title}
                  // subheader={
                  //   <Typography sx={{ color: "#f8f9fa", mt: 1 }}>
                  //     {book.author}
                  //   </Typography>
                  // }
                  subheader={book.author}
                />
              </CardActionArea>

              <CardActionArea
                onClick={() => {
                  navigate("/book/" + book.id);
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    flex: 1,
                    minWidth: 280,
                    objectFit: "contain",
                    backgroundColor: "background.card",
                    p: 1,
                    transition: "all 0.4s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                  component="img"
                  image={book.img}
                  alt={book.title}
                />
              </CardActionArea>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    minHeight: 40,
                  }}
                >
                  {book.summary}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Pages: {book.pages}</strong>
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  minHeight: 40,
                }}
              >
                {readingList.map((x) => x.id).includes(book.id) ? (
                  <Button
                    sx={{ margin: "auto", minWidth: "75%", mb: 1 }}
                    variant="contained"
                    color="secondary"
                    aria-label="remove-book"
                    onClick={() => {
                      handleRemoveOneFromList(book);
                    }}
                    startIcon={<HeartBrokenRoundedIcon />}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    sx={{ margin: "auto", minWidth: "75%", mb: 1 }}
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
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
