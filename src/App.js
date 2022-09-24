import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import BooksCollectionView from "./views/BooksCollectionView";
import FindBookView from "./views/FindBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Box from "@mui/material/Box";
import SnackBar from "./components/SnackBar";
import ProfileView from "./views/ProfileView";
import LogoutView from "./views/LogoutView";
import ViewReadingList from "./views/ViewReadingList";
import ViewBook from "./views/ViewBook";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const HomePage = () => (
  <>
    <div className="main">
      <Typography
        sx={{
          color: "#fff",
          pt: "2rem",
          typography: {
            xs: {},
            sm: {},
            md: {},
            lg: {},
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700!important",
            lineHeight: 1,
            typography: {
              xs: {
                fontSize: "2.6rem!important",
                marginLeft: "2rem",
                pt: "10rem",
              },
              sm: { fontSize: "4rem!important", marginLeft: "4rem" },
              md: { fontSize: "8rem!important", marginLeft: "5rem" },
              lg: { fontSize: "10rem!important", marginLeft: "5rem" },
            },
          }}
        >
          WELCOME
        </Typography>
        <Typography
          sx={{
            fontWeight: "700!important",
            lineHeight: 1,
            typography: {
              xs: { fontSize: "2.6rem!important", marginLeft: "2rem" },
              sm: { fontSize: "4rem!important", marginLeft: "4rem" },
              md: { fontSize: "8rem!important", marginLeft: "5rem" },
              lg: { fontSize: "10rem!important", marginLeft: "5rem" },
            },
          }}
        >
          TO THE{" "}
        </Typography>
        <Typography
          sx={{
            fontWeight: "700!important",
            lineHeight: 1,
            typography: {
              xs: { fontSize: "2.6rem!important", marginLeft: "2rem" },
              sm: { fontSize: "4rem!important", marginLeft: "4rem" },
              md: { fontSize: "8rem!important", marginLeft: "5rem" },
              lg: { fontSize: "10rem!important", marginLeft: "5rem" },
            },
          }}
        >
          BRAINGAIN.
        </Typography>

        {/* <h1 className="h1big">WELCOME</h1>
        <h1 className="h1big">TO THE </h1>
        <h1 className="h1big">BRAINGAIN.</h1> */}
      </Typography>
      <div align="center">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{
              margin: "auto",
              maxWidth: "60%",
              p: "15px 30px",
              mt: 5,
              fontSize: 30,
              transition: "all 0.4s",
              "&:hover": { transform: "scale(1.1)" },
              borderRadius: "20px",
            }}
            variant="contained"
            color="secondary"
            aria-label="add-book"
          >
            <Typography
              sx={{
                fontWeight: "700!important",

                typography: {
                  xs: { fontSize: "0.8rem!important" },
                  sm: { fontSize: "1.1rem!important" },
                  md: { fontSize: "1.5rem!important" },
                  lg: { fontSize: "2rem!important" },
                },
              }}
            >
              ENTER THE KNOWLEDGE
            </Typography>
          </Button>
        </Link>
      </div>
      {/* <h3 align="center" style={{ color: "#ff533d" }}>
        📙 PLEASE (SIGN IN) OR (REGISTER) TO USE THIS SERVICE 📙
      </h3> */}
    </div>
  </>
);

function App() {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SnackBar />
        <NavBar />
        <Box sx={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<BooksCollectionView />} />
            <Route path="/book/:bookId" element={<ViewBook />} />
            <Route path="/mybooks" element={<ViewReadingList />} />
            <Route path="/findbook" element={<FindBookView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/logout" element={<LogoutView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/profile" element={<ProfileView />} />
          </Routes>
        </Box>
      </div>
    </>
  );
}

export default App;
