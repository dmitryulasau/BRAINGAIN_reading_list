import { create } from "apisauce";

const base = "https://cae-bookstore.herokuapp.com/";

const apiClient = (token, cancelToken) =>
  create({
    baseURL: base,
    headers: {
      Authorization: "Bearer " + token,
    },
    cancelToken,
  });

export default apiClient;
