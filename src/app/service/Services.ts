import axios from "axios";

export const handleGet = async (url: string, payload?: any) => {
  return await axios.get(url, { params: payload }).then((response) => {
    return response;
  });
};

export const handlePost = async (url: string, payload?: any) => {
  return await axios.post(url, payload).then((response) => {
    return response;
  });
};

export {};
