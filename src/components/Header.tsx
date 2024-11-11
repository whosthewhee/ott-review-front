/* eslint-disable */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../types/Category";
import { useAuthStore } from "../store/useAuthStore";
import searchIcon from "../assets/images/icon_search.svg";

const Header = () => {
  const userInfo = useAuthStore((state) => state.user?.userinfo);
  const serverUrl = import.meta.env.VITE_SERVER_DOMAIN || "";
  const [categories, setCategories] = useState<Category[]>([]);

  /* 프로필이미지 버튼 클릭시 [로그아웃/마이페이지]버튼 나오도록 처리하는 부분 */
  const [isMoreButtonOpen, setIsMoreButtonOpen] = useState(false);

  const handleMoreButtonToggle = () => {
    setIsMoreButtonOpen((prevValue) => !prevValue);
  };

  const optionsRef = useRef<HTMLDivElement>(null);
  const handleMoreButtonClose = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!optionsRef.current?.contains(e.relatedTarget)) {
      setIsMoreButtonOpen(false);
    }
  };
  /*-------------------------------------------------------------*/

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
        <div className="flex items-center gap-x-4">
          {userInfo ? (
            <div className="flex items-center gap-x-5">
              <div>
                <img
                  src={searchIcon}
                  alt="검색 아이콘"
                  className="w-8 rounded-md"
                />
              </div>
              <div>
                <button
                  onClick={handleMoreButtonToggle}
                  onBlur={handleMoreButtonClose}
                >
                  <img
                    src={userInfo.imageUrl}
                    alt="프로필 이미지"
                    className="w-10 rounded-md"
                  />
                </button>
                {isMoreButtonOpen && (
                  <>
                    <div
                      ref={optionsRef}
                      className="absolute right-4 z-10 flex w-[95px] flex-col gap-1 rounded-md border border-[#0000004d] bg-[#FFFFFF] p-2 text-[14px] font-medium text-[#33393F] shadow-md"
                    >
                      <Link to={"/userInfo"}>마이페이지</Link>
                      <Link to={"/logout"} className="hover:text-[#33393F]">
                        로그아웃
                      </Link>
                    </div>
                  </>
                )}
              </div>
              {/* <span>{userInfo.nickname}</span> */}
            </div>
          ) : (
            <>
              <Link to={"/login"}>로그인</Link>
              <Link to={"/register"}>회원가입</Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
