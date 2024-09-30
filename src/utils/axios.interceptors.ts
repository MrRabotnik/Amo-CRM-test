import axios from "axios";
import { ACCESS_TOKEN, API_URI } from "./constants";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const axiosInstance = axios.create({
    baseURL: CORS_PROXY + API_URI,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (ACCESS_TOKEN) {
            config.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthorized!");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
