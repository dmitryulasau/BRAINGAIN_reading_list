import React from "react";
import NavBar from "./components/NavBar";
import FindBook from "./components/FindBook";
import BookCard from "./components/BookCard";
import GetRequest from "./components/GetRequest";

import LogRegContainer from "./containers/LogRegContainer";

function App() {
  return (
    <>
      <NavBar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FindBook />
        <BookCard />
        <LogRegContainer />
      </div>
    </>
  );
}

export default App;
