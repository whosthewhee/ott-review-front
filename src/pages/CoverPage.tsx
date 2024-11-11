import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
    <div>
      <section className="p-8 bg-[#000000] h-[calc(100vh-190px)] content-center">
        <div className="mt-1 text-center text-[#FFFFFF] text-3xl font-bold grid gap-y-3 justify-center">
          <p>티빙 오리지널부터</p>
          <p>드라마, 예능, 영화, KBO 리그까지!</p>
          <p>무제한으로 스트리밍해 보세요.</p>
          <Link to={"/login"} className="text-lg p-4 bg-[#FF153C] w-full mt-6">
            로그인
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoverPage;
