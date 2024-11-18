import { useAuthStore } from "@/store/useAuthStore";
import axiosInstance from "@/libs/axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "@/libs/react-cookie";

export const useAuth = () => {
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
      const { status, data } = await axiosInstance.post(`/login`, {
        email,
        password,
      });

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
