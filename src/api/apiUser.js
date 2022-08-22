import apiClientNoAuth from "./clientNoAuth";
import apiClientBasicAuth from "./clientBasicAuth";
import apiClientTokenAuth from "./clientTokenAuth";

const endpointLogin = "/login";
const endpointUser = "/user";

const post = async (data, cancelToken) => {
  let error;
  let user;

  const response = await apiClientNoAuth(cancelToken).post(endpointUser, data);
  if (response.ok) {
    user = response.data;
  } else {
    error = "An unexpected error has occured.";
  }
  return {
    error,
    user,
  };
};

const get = async (email, password, cancelToken) => {
  let error;
  let user;

  const response = await apiClientBasicAuth(email, password, cancelToken).get(
    endpointLogin
  );
  if (response.ok) {
    user = response.data;
  } else if (response.status === 401) {
    error = "Invalid email/password combo.";
  } else {
    error = "An unexpected error has occured.";
  }
  return {
    error,
    user,
  };
};

const put = async (token, data, cancelToken) => {
  const response = await apiClientTokenAuth(token, cancelToken).put(
    endpointUser,
    data
  );
  return response.ok;
};

const del = async (token, cancelToken) => {
  const response = await apiClientTokenAuth(token, cancelToken).delete(
    endpointUser
  );
  return response.ok;
};

const apis = {
  post,
  get,
  put,
  del,
};
export default apis;
