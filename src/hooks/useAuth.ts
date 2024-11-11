import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/User";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "@/libs/react-cookie";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useAuth = () => {
  const serverUrl = import.meta.env.VITE_SERVER_DOMAIN || "";
  const navigate = useNavigate();
  const { user, setLoggedIn, setLoggedOut } = useAuthStore((state) => state);

  const loginError = (error: any) => {
    const errorType = error.response?.data?.error;
    let errorMessage = "아이디 또는 비밀번호를 다시 확인해주세요.";

    if (
      errorType === "unenteredEmailError" ||
      errorType === "differentPasswordError"
    ) {
      errorMessage = error.response.data.message;
    }

    console.error(errorMessage, error);
    alert(errorMessage);
  };

  const login = async (
    email: string,
    password: string,
    navigateTarget: string = "/"
  ) => {
    try {
      const { status, data } = await axios.post(
        `${serverUrl}/login`,
        { email, password },
        { withCredentials: true }
        // withCredentials 옵션 : 서로 다른 도메인에 요청을 보낼 때 요청에 credential정보를 담아서 보낼지 결정
        // => 보내려는 요청에 쿠키가 첨부되거나 헤더에 Authorization항목이 있을 경우 true로 설정해야함
      );

      if (status === 201) {
        alert("로그인에 성공했습니다.");

        console.log("data:", data);
        setCookie("accessToken", data.token);
        setLoggedIn(data, data.token);

        navigate(navigateTarget);
      }
    } catch (error: any) {
      loginError(error);
    }
  };

  const logout = async () => {
    setLoggedOut();
    navigate("/login");
  };

  return {
    user,
    login,
    logout,
  };
};
