import React from "react";
import NavBar from "./components/NavBar";
import FindBook from "./components/FindBook";
import BookCard from "./components/BookCard";
import GetRequest from "./components/GetRequest";

function App() {
  return (
    <>
      <NavBar />

      <FindBook />
      <BookCard />
      <GetRequest />
    </>
  );
}

export default App;
