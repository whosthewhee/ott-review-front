/* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../types/Category";

const Header = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [categories, setCategories] = useState<Category[]>([]);

  // 카테고리 목록 불러오기
  useEffect(() => {
    axios
      .get(`${serverUrl}/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-[#000000] text-[#D9D9D9] font-medium">
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
          {/* 플랫폼별 리스트 화면으로 이동*/}
          {/* <Link to={"/platform/netflix"}>넷플릭스</Link>
          <Link to={"/platform/tving"}>티빙</Link>
          <Link to={"/platform/wave"}>웨이브</Link>
          <Link to={"/platform/disney"}>디즈니 플러스</Link> */}

          {/* 카테고리별 리스트 화면으로 이동*/}
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category.name.toLowerCase()}`}
            >
              {category.viewName}
            </Link>
          ))}
        </div>
        <div className="flex items-end gap-x-3">
          {/* 로그인 되어있으면 프로필 이미지, 안되어 있으면 로그인페이지로 이동/회원가입 버튼 노출*/}
          <Link to={"/login"}>로그인</Link>
          <Link to={"/register"}>회원가입</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
