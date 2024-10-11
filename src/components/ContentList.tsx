import React, { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "../types/Content";
import ContentCard from "./ContentCard";

const ContentList: React.FC = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [contents, setContents] = useState<Content[]>([]);

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

  return (
    <>
      {contents.map((content, index) => (
        <ContentCard key={content._id} {...content} />
      ))}
      {/* <h1>Categories</h1>
      <ul>
        {contents.map((content) => (
          <li key={content._id}>
            <h2>{content.title}</h2>
            <p>Platform: {content.platform}</p>
            <p>Rating: {content.rating}</p>
            <img src={content.imageUrl} alt={content.title} />
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default ContentList;
