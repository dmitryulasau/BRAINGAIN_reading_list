import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function GetRequest() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const baseURL = "https://cae-bootstore.herokuapp.com/book";

    axios.get(baseURL).then((response) => {
      setBook(response.data.books);
    });
  }, []);
  console.log(book);

  return (
    <>
      <Container
        maxWidth="xl
      "
        sx={{ margin: "auto", maxWidth: "1200px" }}
      >
        <h1 align="center">BOOKS COLLECTION</h1>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {book.map((book) => (
            <Card
              raised
              sx={{
                maxWidth: 280,
                Height: 400,
                margin: "auto",
                marginTop: "5vh",
              }}
            >
              <CardHeader
                title={JSON.stringify(book.title)}
                subheader={JSON.stringify(book.author)}
              />
              <CardMedia
                sx={{
                  height: 200,
                  flex: 1,
                  width: null,
                  objectFit: "contain",
                  // height: "auto",
                  // maxHeight: "250px",
                  // width: "auto",
                  // maxWidth: "250px",
                }}
                component="img"
                image={book.img}
                alt={JSON.stringify(book.title)}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {JSON.stringify(book.summary)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <HighlightOffTwoToneIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}

{
  /* <div>
<p>{`${JSON.stringify(book.title)}`}</p>
</div> */
}
