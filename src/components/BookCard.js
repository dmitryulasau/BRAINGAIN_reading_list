import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

// export default function BookCard() {
//   return (
//     <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "5vh" }}>
//       <CardHeader title="1984" subheader="George Orwell" />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://res.cloudinary.com/dulasau/image/upload/v1660651672/71P9ZpVxpJL_q299dv.jpg"
//         alt="1984"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           1984 is a dystopian novella by George Orwell published in 1949, which
//           follows the life of Winston Smith, a low ranking member of 'the
//           Party', who is frustrated by the omnipresent eyes of the party, and
//           its ominous ruler Big Brother. 'Big Brother' controls every aspect of
//           people's lives.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="delete">
//           <HighlightOffTwoToneIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "5vh" }}>
      <CardHeader title="1984" subheader="George Orwell" />
      <CardMedia
        component="img"
        height="194"
        image="https://res.cloudinary.com/dulasau/image/upload/v1660651672/71P9ZpVxpJL_q299dv.jpg"
        alt="1984"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          1984 is a dystopian novella by George Orwell published in 1949, which
          follows the life of Winston Smith, a low ranking member of 'the
          Party', who is frustrated by the omnipresent eyes of the party, and
          its ominous ruler Big Brother. 'Big Brother' controls every aspect of
          people's lives.
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
  );
}
