import React from "react";
import NavBar from "./components/NavBar";
import FindBook from "./components/FindBook";
import BookCard from "./components/BookCard";
import GetRequest from "./components/GetRequest";

import LogRegContainer from "./containers/LogRegContainer";
import { Routes, Route } from "react-router-dom";
import Login from "./forms/Login";
import MyBooksView from "./views/MyBooksView";
import BooksCollectionView from "./views/BooksCollectionView";
import FindBookView from "./views/FindBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Box from "@mui/material/Box";
import FlashMessage from "./components/FlashMessage";

const HomePage = () => (
  <>
    <div align="center">
      <h1>Welcome To The BOOKSTORE</h1>
      <img
        src="https://static.dezeen.com/uploads/2019/07/chongqing-zhongshuge-bookstore-stepwell-x-living-china_sq-b.jpg"
        width={700}
        height={"70%"}
      ></img>
    </div>
  </>
);

function App() {
  return (
    <>
      <FlashMessage />
      <NavBar />
      <Box sx={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<BooksCollectionView />} />
          <Route path="/mybooks" element={<MyBooksView />} />
          <Route path="/findbook" element={<FindBookView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
