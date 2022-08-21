import apiClientNoAuth from "./clientNoAuth";

const endpoint = "/book";

const getAllBooks = async (cancelToken) => {
  let error;
  let books;

  const response = await apiClientNoAuth(cancelToken).get(endpoint);
  if (response.ok) {
    books = response.data.books;
  } else {
    error = "An unexpected error has occured.";
  }
  return {
    error,
    books,
  };
};

const getBook = async (id, cancelToken) => {
  let error;
  let book;

  const response = await apiClientNoAuth(cancelToken).get(endpoint + "/" + id);
  if (response.ok) {
    book = response.data;
  } else if (response.status === 404) {
    error = "We don't have this book";
  } else {
    error = "An unexpected error has occured.";
  }
  return {
    error,
    book,
  };
};

const apis = {
  getAllBooks,
  getBook,
};
export default apis;
