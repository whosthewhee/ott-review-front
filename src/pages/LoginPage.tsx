import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { jwtDecode } from "jwt-decode";

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const navigate = useNavigate();
  const { setLoggedIn } = useAuthStore((state) => state);

  const [loginFormData, setLoginFormData] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (error: any) => {
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // await login(loginFormData);
    try {
      const { status, data } = await axios.post(
        `${serverUrl}/login`,
        loginFormData,
        { withCredentials: true } // 쿠키 전송을 위한 옵션
      );

      if (status === 200) {
        alert("로그인에 성공했습니다.");

        console.log("data:", data);

        // setLoggedIn({ memberId, email, name, roles, expiresAt });
        setLoggedIn(data);

        navigate("/");
      }
    } catch (error: any) {
      handleError(error);
    }
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // await login(loginFormData);
  //   try {
  //     const response = await axios.post(
  //       `${serverUrl}/login`,
  //       loginFormData,
  //       { withCredentials: true } // 쿠키 전송을 위한 옵션
  //     );

  //     if (response.status === 201) {
  //       const { accessToken } = response.data;

  //       // 토큰을 로컬 스토리지에 저장
  //       localStorage.setItem("token", accessToken);

  //       // JWT 토큰 디코딩
  //       const decodedToken: User = jwtDecode(accessToken);
  //       //console.log("Decoded Token:", decodedToken);

  //       // 로그인 상태 설정
  //       setLoggedIn(decodedToken);

  //       navigate("/");
  //     }
  //   } catch (error: any) {
  //     handleError(error);
  //   }
  // };

  // const handleLogin = async (loginFormData: LoginFormProps) => {
  //   await login(loginFormData);
  // };

  return (
    <section className="h-[calc(100vh-190px)] p-8 bg-[#000000] text-[#FFFFFF] flex flex-col items-center gap-y-10 px-60 pt-10">
      <div>
        <h3 className="text-center text-2xl font-bold">로그인</h3>
      </div>
      <form
        id="loginForm"
        onSubmit={handleLogin}
        className="flex grid gap-y-8 w-full"
      >
        <div className="grid gap-y-2">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={"이메일을 입력해주세요."}
            className="bg-[#212121] w-full p-4"
            required
            value={loginFormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-y-2">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder={"비밀번호를 입력해주세요."}
            className="bg-[#212121] w-full p-4"
            required
            value={loginFormData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="p-4 bg-[#4e4e4e] w-full">
          로그인하기
        </button>
      </form>
    </section>
  );
};
export default LoginPage;
