import { create } from "apisauce";

const base = "https://cae-bootstore.herokuapp.com";

const apiClient = (cancelToken) =>
  create({
    baseURL: base,
    cancelToken,
  });

export default apiClient;
