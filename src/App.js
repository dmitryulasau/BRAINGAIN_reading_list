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

const HomePage = () => (
  <>
    <div className="main">
      <div className="big">
        <h1 className="h1big">WELCOME</h1>
        <h1 className="h1big">TO THE </h1>
        <h1 className="h1big">BRAINGAIN.</h1>
      </div>
      <div align="center">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{
              margin: "auto",
              width: "40%",
              p: 5,
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
            ENTER THE KNOWLEDGE
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
