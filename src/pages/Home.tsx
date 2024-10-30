import { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import ContentList from "../components/ContentList";
import { Category } from "../types/Category";
import { Content } from "../types/Content";
import axios from "axios";
import ContentListRanking from "../components/ContentListRanking";
import BannerList from "../components/BannerList";

const Home = () => {
  //const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [categories, setCategories] = useState<Category[]>([]);
  const [contents, setContents] = useState<Content[]>([]);

  const sectionTitleName = (categoryName: string) => {
    switch (categoryName) {
      case "Movie":
        return "급상승 영화";
      case "Entertainment":
        return "리얼리티 예능";
      case "Drama":
        return "가족 이야기를 담은 드라마";
      case "Documentary":
        return "다큐멘터리";
      default:
        return "기타";
    }
  };

  // 카테고리 목록 불러오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMAIN}/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);

  // 콘텐츠 목록 불러오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMAIN}/contents`)
      .then((response) => {
        setContents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);

  //오늘의 추천 컨텐츠 목록 (평점 4.0 이상)
  const recommendedContents: Content[] = contents.filter(
    (content) => content.rating >= 4.0
  );

  return (
    <div>
      {/* 배너 영역 */}
      <section className="p-8 bg-[#000000]">
        <div>
          <BannerList />
        </div>
      </section>

      {/* 오늘의 TOP20 영역 */}
      <section className="p-8 bg-[#000000]">
        <h2 className="text-lg font-bold mb-4 text-[#FFFFFF]">오늘의 TOP20</h2>
        <div>
          <ContentListRanking contents={recommendedContents} />
        </div>
      </section>

      {/* 지금 방영 중인 인기 콘텐츠 영역 */}
      <section className="p-8 bg-[#000000]">
        <h2 className="text-lg font-bold mb-4 text-[#FFFFFF]">
          지금 방영 중인 인기 콘텐츠
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {contents.map((content, index) => (
            <ContentCard key={content._id} {...content} />
          ))}
        </div>
      </section>

      {/* 카테고리별 콘텐츠 영역 */}
      {categories.map((category) => (
        <section key={category._id} className="p-8 bg-[#000000]">
          <h2 className="text-lg font-bold mb-4 text-[#FFFFFF]">
            {sectionTitleName(category.name)}
          </h2>
          <div key={category._id}>
            <ContentList
              key={category._id}
              contents={contents}
              categoryName={category.name}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
