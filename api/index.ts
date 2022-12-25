import axios from "axios";

const baseURL = "https://dummyapi.io/data/v1/";

export const getPosts = async () => {
  const { data } = await axios.get(`${baseURL}/post`, {
    headers: { "app-id": "63a71e63c45ebc81a5f4902b" },
    params: { page: 1, limit: 10 },
  });
  return data.data;
};

export const getPost = async (id: string) => {
  const { data } = await axios.get(`${baseURL}/post/${id}`, {
    headers: { "app-id": "63a71e63c45ebc81a5f4902b" },
  });
  return data;
};
