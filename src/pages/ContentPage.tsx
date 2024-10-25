import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "../types/Review";

const ContentPage = () => {
  const { contentId } = useParams();
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [reviews, setReviews] = useState<Review[]>([]);

  // 리뷰 목록 불러오기
  useEffect(() => {
    axios
      .get(`${serverUrl}/reviews`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);

  return (
    <div>
      {/* 상단 컨텐츠 설명 부분 */}
      {/* <article> 태그의 사용 목적: "독립적인 콘텐츠 유닛"을 나타내는 것 (뉴스기사, 블로그 글, 댓글, 상품설명, 이벤트 글) */}
      {/* <picture> 태그의 사용 목적: <source> 태그를 이용한 반응형 이미지를 사용함으로써 대역폭을 절약하고 페이지 로드 시간 단축을 위한 목적으로 사용 */}
      <article className="p-8 bg-[#000000] text-[#FFFFFF]">
        <div className="grid grid-cols-3 gap-[2.5rem] p-[3rem 0rem 4rem 0] grid-cols-[minmax(auto,33rem)_auto_22rem]">
          <div className="col-start-1">
            <div>
              <div className="">
                <picture>
                  <source
                    srcSet="https://image.tving.com/ntgs/contents/CTC/caip/CAIP1800/ko/20240919/0601/P001761804.png/dims/resize/F_webp,800?from=pc"
                    type="image/webp"
                  />
                  <img
                    className="max-w-[20rem]"
                    src="https://image.tving.com/ntgs/contents/CTC/caip/CAIP1800/ko/20240919/0601/P001761804.png/dims/resize/800"
                    alt="정년이"
                  />
                </picture>
              </div>
              <div>
                <div>토일 오후9:20</div>
                <div>드라마</div>
                <div>tvN</div>
                <div>시즌 1개</div>
                <div>해설자막</div>
              </div>
              <div>
                <button>1화 시청하기</button>
                <button>
                  <span>찜</span>
                </button>
                <button type="button">
                  <span>공유</span>
                </button>
              </div>
              <div>
                <dl>
                  <dt>크리에이터</dt>
                  <dd>정지인, 최효비</dd>
                </dl>
                <dl>
                  <dt>출연</dt>
                  <dd>김태리, 신예은, 라미란, 정은채, 김윤혜, 우다비</dd>
                </dl>
              </div>
              <p className="whitespace-pre-line">
                1950년대 한국전쟁 직후, 가난했지만 낭만이 있던 시대! 최고의 국극
                배우에 도전하는 ′타고난 소리 천재′ 정년이를 둘러싼 경쟁과 연대,
                그리고 찬란한 성장기
              </p>
            </div>
          </div>
          <div className="col-start-3">
            <picture>
              <source
                srcSet="https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20240919/0601/P001761804.jpg/dims/resize/F_webp,480"
                type="image/webp"
              />
              <img
                src="https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20240919/0601/P001761804.jpg/dims/resize/480"
                alt="정년이"
              />
            </picture>
          </div>
        </div>
      </article>

      {/* 하단 컨텐츠 부분 */}
      <section className="p-8 bg-[#000000]">
        {/* 리뷰 영역 */}
        <section>
          <div className="flex gap-x-2 items-center">
            <span className="text-lg font-bold text-[#FFFFFF]">코멘트</span>
            <span className="text-[#D9D9D9] text-sm">150 +</span>
          </div>
          <div className="h-[255px]"></div>
        </section>

        {/* 비슷한 콘텐츠 */}
        <section>
          <span className="text-lg font-bold text-[#FFFFFF]">
            비슷한 콘텐츠
          </span>

          <div className="h-[255px]"></div>
        </section>
      </section>
    </div>
  );
};
export default ContentPage;
