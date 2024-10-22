import { useParams } from "react-router-dom";

const ContentPage = () => {
  const { contentId } = useParams();

  return (
    <div>
      {/* 컨텐츠 페이지 헤더 */}
      <div></div>
      {/* 컨텐츠 페이지 본문 */}
      <div></div>
    </div>
  );
};
export default ContentPage;
