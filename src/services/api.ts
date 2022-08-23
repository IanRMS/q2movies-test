import axios from "axios";

const Api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
  timeout: 10000,
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
