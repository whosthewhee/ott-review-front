import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      {/* 카테고리 페이지 헤더 */}
      <div></div>
      {/* 카테고리 페이지 본문 */}
      <div></div>
    </div>
  );
};
export default CategoryPage;
