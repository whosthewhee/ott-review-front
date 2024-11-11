import { Link } from "react-router-dom";

const CoverHeader = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-[#000000] text-[#D9D9D9] font-medium h-[102px]">
        <div className="flex items-center gap-x-5">
          <Link to={"/"}>
            <div className="flex items-center sm:w-[8.2rem] md:w-[10.5625rem] h-[4.333rem]">
              <img
                src="https://image.tving.com/ntgs/operation/logo/2024/10/18/1729215203_1.png"
                alt="로고"
                className="w-full sm:h-[2rem] md:h-full object-cover object"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/register"}>회원가입</Link>
          </>
        </div>
      </header>
    </>
  );
};

export default CoverHeader;
