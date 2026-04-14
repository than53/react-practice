import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use(
  (request) => {
    console.log("Starting Request ", request);
    return request;
  },
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("Request Error ", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data;
    }
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized!");
    }
    if (error.response && error.response.status === 500) {
      console.log("Server Error!");
    }
    return Promise.reject(error)
  },
);

export default api;
