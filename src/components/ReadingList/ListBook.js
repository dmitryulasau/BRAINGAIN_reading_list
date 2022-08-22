import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import RemoveBookList from "./RemoveBookList";

export default function ListBook({ book }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      sx={{
        display: "flex",
        width: "70%",
        margin: "auto",
        p: 1,
        mb: 4,
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",

          p: 1,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate("/book/" + book.id);
          }}
        >
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="h6" color="text.secondary">
            AUTHOR: {book.author}
          </Typography>
        </CardActionArea>

        <CardActions
          sx={{ p: 0, mt: 1, justifyContent: "center" }}
          disableSpacing
        >
          <RemoveBookList book={book} />
        </CardActions>
      </CardContent>
      <CardActionArea
        sx={{
          width: "40%",
          backgroundColor: "background.card",
          borderRadius: "9px",
          p: 1,
          transition: "all 0.4s",
          "&:hover": { transform: "scale(1.1)" },
        }}
        onClick={() => {
          navigate("/book/" + book.id);
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "18vh", objectFit: "contain", m: 0 }}
          image={book.img}
          alt={`Cover of ${book.title}`}
        />
      </CardActionArea>
    </Card>
  );
}
