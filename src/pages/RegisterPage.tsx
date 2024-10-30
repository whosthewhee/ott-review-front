import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { User, userInfo } from "../types/User";
import { useNavigate } from "react-router-dom";

interface RegisterFormProps extends User {
  passwordConfirm?: string;
}

const RegisterPage = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState<RegisterFormProps>({
    email: "",
    password: "",
    passwordConfirm: "",
    isDeleted: false,
    userinfo: {},
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("userinfo.")) {
      const fieldName = name.split(".")[1] as keyof userInfo;
      setRegisterFormData({
        ...registerFormData,
        userinfo: {
          ...registerFormData.userinfo,
          [fieldName]: value,
        },
      });
    } else {
      setRegisterFormData({
        ...registerFormData,
        [name]: value,
      });
    }
  };

  const handleError = (error: any) => {
    const errorType = error.response?.data?.error;
    let errorMessage = "회원가입 중 오류가 발생했습니다.";

    if (errorType === "duplicatedEmailError") {
      errorMessage = error.response.data.message;
    }

    console.error(errorMessage, error);
    alert(errorMessage);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (registerFormData.password !== registerFormData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 서버로 보낼 데이터에서 passwordConfirm 제거
    const { passwordConfirm, ...submitData } = registerFormData;

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(`${serverUrl}/users`, submitData);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (error: any) {
      handleError(error);
    }
  };

  return (
    <section className="min-h-screen p-8 bg-[#000000] text-[#FFFFFF] flex flex-col items-center gap-y-10 px-60 pt-10">
      <div>
        <h3 className="text-center text-2xl font-bold">회원가입</h3>
        <p>아이디와 이메일로 간편하게 시작하세요!</p>
      </div>

      <form
        id="registerForm"
        onSubmit={handleSubmit}
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
            value={registerFormData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="grid gap-y-2">
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            autoComplete="username"
            placeholder={"아이디를 입력해주세요."}
            className="bg-[#212121] w-full p-4"
          />
          <p className="text-[#6e6e6e] text-[13px]" id="userIdMsg">
            영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
          </p>
        </div> */}
        <div className="grid gap-y-2">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder={"비밀번호를 입력해주세요."}
            className="bg-[#212121] w-full p-4"
            value={registerFormData.password}
            onChange={handleChange}
            required
          />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder={"비밀번호를 다시 입력해주세요."}
            className="bg-[#212121] w-full p-4"
            value={registerFormData.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-y-2">
          <label htmlFor="userinfo.nickname">닉네임 (선택)</label>
          <input
            id="userinfo.nickname"
            name="userinfo.nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            className="bg-[#212121] w-full p-4"
            value={registerFormData.userinfo?.nickname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-y-2">
          <label htmlFor="userinfo.imageUrl">프로필 이미지 URL (선택)</label>
          <input
            id="userinfo.imageUrl"
            name="userinfo.imageUrl"
            type="text"
            placeholder="이미지 URL을 입력해주세요."
            className="bg-[#212121] w-full p-4"
            value={registerFormData.userinfo?.imageUrl || ""}
            onChange={handleChange}
          />
        </div>
        {/* <div className="grid gap-y-2">
          <label htmlFor="userinfo.favoriteContents">선호 콘텐츠 (선택)</label>
          <input
            id="userinfo.favoriteContents"
            name="userinfo.favoriteContents"
            type="text"
            placeholder="선호하는 콘텐츠를 쉼표로 구분해 입력해주세요."
            className="bg-[#212121] w-full p-4"
            value={formData.userinfo?.favoriteContents?.join(", ") || ""}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "userinfo.favoriteContents",
                  value: e.target.value.split(", "),
                },
              } as ChangeEvent<HTMLInputElement>)
            }
          />
        </div> */}
        <div className="w-full">
          <ul>
            <li className="flex gap-x-2">
              <input type="checkbox" id="agreeAll" />
              <label htmlFor="agreeAll">
                필수 및 선택 항목을 모두 포함하여 동의합니다.
              </label>
            </li>
          </ul>
          <ul>
            <li className="flex gap-x-2">
              <input type="checkbox" id="ageOver14" />
              <label htmlFor="ageOver14">만 14세 이상입니다.</label>
            </li>
            <li className="flex gap-x-2">
              <input type="checkbox" id="termsRequired" />
              <label htmlFor="termsRequired">[필수] 서비스 이용약관 동의</label>
            </li>
            <li className="flex gap-x-2">
              <input type="checkbox" id="privacyRequired" />
              <label htmlFor="privacyRequired">
                [필수] 개인정보 수집 및 이용 동의
              </label>
            </li>
            <li className="flex gap-x-2">
              <input type="checkbox" id="privacyOptional" />
              <label htmlFor="privacyOptional">
                [선택] 개인정보 수집 및 이용 동의
              </label>
            </li>
            <li className="flex gap-x-2">
              <input type="checkbox" id="marketingOptional" />
              <label htmlFor="marketingOptional">
                [선택] 마케팅 정보 수신 동의
              </label>
            </li>
          </ul>
        </div>
        <button type="submit" className="p-4 bg-[#4e4e4e] w-full">
          가입하기
        </button>
      </form>
    </section>
  );
};
export default RegisterPage;
