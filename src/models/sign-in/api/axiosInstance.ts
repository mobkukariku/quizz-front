import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: "http://localhost:7777/api",
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const { data } = await axiosInstance.post("/auth/login/access-token");
          Cookies.set("accessToken", data.accessToken); // Обновляем токен
          return axiosInstance(originalRequest);
        } catch (error) {
          // Логаут или ошибка токена
          console.error("Refresh token expired, logging out.");
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          window.location.href = "/login";
          console.error(error);
        }
      }
      return Promise.reject(error);
    }
  );


  export const login = async (data: { email: string; password: string }) => {
    try{
        const response = await axiosInstance.post("/auth/login", data);
        console.log(response);
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken);
        return response;
    }catch(error){
        console.error(error);
    }
  }