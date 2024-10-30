import { useParams } from "react-router-dom";
import Editor from "../components/QuillEditor";

const CommentPage = () => {
  const { commentId } = useParams();

  return (
    <div>
      <section>
        <div></div>
        <div>코멘트 내용</div>
        <div>좋아요 수/댓글 수 표시 영역</div>
      </section>
      <section></section>
    </div>
  );
};
export default CommentPage;
