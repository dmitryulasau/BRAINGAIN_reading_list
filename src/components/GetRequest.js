// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const baseURL = "https://cae-bootstore.herokuapp.com/book";

// export default function GetRequest() {
//   const [book, setBook] = useState(null);
//   console.log(book);
//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setBook(response.data.books);
//     });
//   }, []);

//   if (!book) return null;

//   return (
//     <div>
//       <h1>{book.title}</h1>
//       <p>{book.author}</p>
//       <p>{book.pages}</p>
//       <p>{book.summary}</p>
//       <p>{book.img}</p>
//     </div>
//   );
// }
