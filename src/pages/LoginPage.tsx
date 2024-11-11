import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";

interface LoginFormProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { login } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async ({ email, password }: LoginFormProps) => {
    await login(email, password);
  };

  return (
    <section className="h-[calc(100vh-190px)] p-8 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center items-center gap-y-10 px-60 pt-10">
      <div>
        <h3 className="text-center text-2xl font-bold">로그인</h3>
      </div>
      <form
        id="loginForm"
        onSubmit={onSubmit(handleLogin)}
        className="flex grid gap-y-8 w-full"
      >
        <div className="grid gap-y-2">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요.",
              },
            })}
            className="bg-[#212121] w-full p-4"
            placeholder={"이메일을 입력해주세요."}
          />
          {errors?.email && (
            <p className="ml-2 mt-1 w-full text-[13px] text-red-400">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="grid gap-y-2">
          <label htmlFor="password">비밀번호</label>
          <input
            autoComplete="current-password"
            type="password"
            className="bg-[#212121] w-full p-4"
            {...register("password", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요.",
              },
            })}
            placeholder={"비밀번호를 입력해주세요."}
          />
          {errors?.password && (
            <p className="ml-2 mt-1 w-full text-[12px] text-red-400">
              {errors.password?.message}
            </p>
          )}
        </div>
        <button type="submit" className="p-4 bg-[#4e4e4e] w-full">
          로그인하기
        </button>
      </form>
    </section>
  );
};
export default LoginPage;
