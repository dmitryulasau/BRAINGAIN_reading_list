import { create } from "apisauce";
import base64 from "base-64";

const base = "https://cae-bookstore.herokuapp.com/";

const apiClient = (email, password, cancelToken) =>
  create({
    baseURL: base,
    headers: {
      Authorization: "Basic " + base64.encode(email + ":" + password),
    },
    cancelToken,
  });

export default apiClient;
