import { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import ContentList from "../components/ContentList";
import { Category } from "../types/Category";
import axios from "axios";
import { Content } from "../types/Content";

const Home = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [categories, setCategories] = useState<Category[]>([]);
  const [contents, setContents] = useState<Content[]>([]);

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
  console.log(categories);

  // 콘텐츠 목록 불러오기
  useEffect(() => {
    axios
      .get(`${serverUrl}/contents`)
      .then((response) => {
        setContents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);
  // const recommendedContent: Content[] = [
  //   {
  //     title: "Stranger Things",
  //     platform: "Netflix",
  //     rating: 4.5,
  //     imageUrl: "https://via.placeholder.com/150",
  //   },
  //   {
  //     title: "The Mandalorian",
  //     platform: "Disney+",
  //     rating: 4.7,
  //     imageUrl: "https://via.placeholder.com/150",
  //   },
  // ];

  return (
    <div>
      <section className="p-8 bg-[#000000]">
        <h2 className="text-2xl font-bold mb-4 text-[#FFFFFF]">
          지금 방영 중인 인기 콘텐츠
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {contents.map((content, index) => (
            <ContentCard key={content._id} {...content} />
          ))}
          {/* <ContentList /> */}
          {/* {recommendedContent.map((content, index) => (
            <ContentCard key={index} {...content} />
            <ContentList />
          ))} */}
        </div>
      </section>

      {categories.map((category) => (
        <section key={category._id} className="p-8 bg-[#000000]">
          <h2 className="text-2xl font-bold mb-4 text-[#FFFFFF]">
            {category.name}
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* {contents[category].map((content, index) => (
              <ContentCard key={index} {...content} />
            ))} */}
            {/* <ContentList /> */}

            {contents
              .filter((content) => content.category_nm === category.name)
              .map((content, index) => (
                <ContentCard key={index} {...content} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
