import { clientNoAuth } from "./client.js";

const bookEndpoint = "/book";

export const getBook = async (bookID, cancelToken) => {
  let error;
  let book;

  const response = await clientNoAuth(cancelToken).get(
    bookEndpoint + "/" + bookID
  );
  if (response.ok) {
    book = response.data;
  } else {
    error = "You shall not pass!";
  }
  return {
    error,
    book,
  };
};
