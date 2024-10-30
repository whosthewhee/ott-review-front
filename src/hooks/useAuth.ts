import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/User";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  email: string;
  password: string;
}

export const useAuth = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
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

  // const login = async (
  //   email: string,
  //   password: string,
  //   navigateTarget: string = "/"
  // )
  const login = async (loginFormData: LoginFormProps) => {
    try {
      const response = await axios.post(
        `${serverUrl}/login`,
        loginFormData,
        { withCredentials: true } // 쿠키 전송을 위한 옵션
      );

      if (response.status === 201) {
        const { accessToken } = response.data;

        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem("token", accessToken);

        // JWT 토큰 디코딩
        const decodedToken: User = jwtDecode(accessToken);
        //console.log("Decoded Token:", decodedToken);

        // 로그인 상태 설정
        setLoggedIn(decodedToken);

        navigate("/");
      }
    } catch (error: any) {
      loginError(error);
    }
  };

  const logout = async () => {
    // try {
    //   await axiosInstance.delete("/api/Token");
    // } catch (error) {
    //   console.log("Error during logout");
    // } finally {
    setLoggedOut();
    navigate("/");
    // }
  };

  return {
    user,
    login,
    logout,
  };
};
