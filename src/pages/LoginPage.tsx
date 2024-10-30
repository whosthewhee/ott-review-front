import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const navigate = useNavigate();

  // const [loginFormData, setLoginFormData] = useState<RegisterFormProps>({
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  //   isDeleted: false,
  //   userinfo: {},
  // });

  return (
    <section className="p-8 bg-[#000000] text-[#FFFFFF] flex flex-col items-center gap-y-10 px-60 pt-10">
      <div>
        <h3 className="text-center text-2xl font-bold">로그인</h3>
      </div>
      {/* <form
        id="loginForm"
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
            value={formData.email}
            onChange={handleChange}
            required
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="p-4 bg-[#4e4e4e] w-full">
          로그인하기
        </button>
      </form> */}
    </section>
  );
};
export default LoginPage;
