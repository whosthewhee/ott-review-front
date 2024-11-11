import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_DOMAIN || "";

const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: serverUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// axios 요청에 대한 응답이 401일 경우 로그인 페이지로 이동
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      !error.config.url?.includes("/api/Token")
    ) {
      window.location.href = "/logout";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
