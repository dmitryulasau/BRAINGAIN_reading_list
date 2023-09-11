import { create } from "apisauce";

const base = "https://cae-bookstore.herokuapp.com/";

const apiClient = (cancelToken) =>
  create({
    baseURL: base,
    cancelToken,
  });

export default apiClient;
