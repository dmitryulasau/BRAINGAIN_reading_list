import { clientNoAuth, clientTokenAuth } from "./client.js";

const userEndpoint = "/user";

// Create a user
export const registerUser = async (userData, cancelToken) => {
  let error;
  const response = await clientNoAuth(cancelToken).post(userEndpoint, userData);
  if (!response.ok) {
    error = "Hmmm... smells bad.";
  }
  return {
    error,
  };
};

// Edit a user
export const editUser = async (token, data, cancelToken) => {
  let error;
  const response = await clientTokenAuth(token, cancelToken).put(
    userEndpoint,
    data
  );
  if (!response.ok) {
    error = "Hmmm... smells bad.";
  }
  return {
    error,
  };
};

// Delete a user
export const deleteUser = async (token, cancelToken) => {
  let error;
  const response = await clientTokenAuth(token, cancelToken).delete(
    userEndpoint
  );
  if (!response.ok) {
    error = "Hmmm... smells bad.";
  }
  return { error };
};
