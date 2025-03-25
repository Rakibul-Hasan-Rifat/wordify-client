import axios from "axios";

const publicAxiosInstance = axios.create({
  baseURL: "http://localhost:5173",
});

const usePublicAxios = () => {
  return publicAxiosInstance;
};

export default usePublicAxios;