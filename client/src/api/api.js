import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
let API_TOKEN = localStorage.getItem("auth");
API_TOKEN = JSON.parse(localStorage.getItem("auth"));

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default axiosInstance;
