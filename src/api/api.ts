import axios, { type AxiosResponse } from "axios";

// Create an instance of axios with some default configuration
const apiClient = axios.create({
  baseURL: "https://dog.ceo/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async <T, D = unknown>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: D
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
  });

  return response.data;
};
