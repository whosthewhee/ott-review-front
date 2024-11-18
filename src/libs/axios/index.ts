import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_DOMAIN || "";

const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: serverUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  // withCredentials 옵션 : 서로 다른 도메인에 요청을 보낼 때 요청에 credential정보를 담아서 보낼지 결정
  // => 보내려는 요청에 쿠키가 첨부되거나 헤더에 Authorization항목이 있을 경우 true로 설정해야함
});

// axios 요청에 대한 응답이 401일 경우 로그인 페이지로 이동
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      !error.config.url?.includes("/login")
    ) {
      window.location.href = "/logout";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
