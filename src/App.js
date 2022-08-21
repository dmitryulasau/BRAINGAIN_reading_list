import React from "react";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";

import MyBooksView from "./views/MyBooksView";
import BooksCollectionView from "./views/BooksCollectionView";
import FindBookView from "./views/FindBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Box from "@mui/material/Box";
import SnackBar from "./components/SnackBar";
import ProfileView from "./views/ProfileView";
import LogoutView from "./views/LogoutView";

const HomePage = () => (
  <>
    <div align="center">
      <h1>WELCOME TO THE BOOKSTORE!</h1>
      <h3 style={{ color: "#ff533d" }}>
        📙 PLEASE (SIGN IN) OR (REGISTER) TO USE THIS SERVICE 📙
      </h3>
      <img
        src="https://res.cloudinary.com/dulasau/image/upload/v1661097055/BOOKSTORE_yxq4mj.jpg"
        width={700}
        height={"70%"}
        alt="Book store"
      ></img>
    </div>
  </>
);

function App() {
  return (
    <>
      <div className="main" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SnackBar />
        <NavBar />
        <Box sx={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<BooksCollectionView />} />
            <Route path="/mybooks" element={<MyBooksView />} />
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
