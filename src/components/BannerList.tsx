import { useEffect, useRef, useState } from "react";
import { Content } from "../types/Content";
import ContentCard from "./ContentCard";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { BannerContent } from "../types/BannerContent";

// type BannerListProps = {
//   contents: Content[];
//   categoryName: string;
// };

const BannerList = () => {
  const serverUrl = process.env.REACT_APP_SERVER_DOMAIN || "";
  const [bannerContents, setBannerContents] = useState<BannerContent[]>([]);

  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // prev, next 버튼에 사용할 ref 생성
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // 배너 목록 불러오기
  useEffect(() => {
    SwiperCore.use([Navigation]);
    axios
      .get(`${serverUrl}/bannercontents`)
      .then((response) => {
        setBannerContents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contents:", error);
      });
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} // 페이지네이션, 자동재생 등의 기능을 불러옴
        spaceBetween={50} // 슬라이더 간의 간격 지정
        slidesPerView={1} // 한 슬라이더 당 보여져야하는 슬라이드 갯수
        loop={true} // 무한 루프
        autoplay={{
          // 자동 재생
          delay: 10000, // 지연 시간 (한 슬라이더에 머물르는 시간)
          disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
        }}
        speed={1000} // 슬라이더 넘어가는 속도
        watchOverflow={true} // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        // 슬라이더가 변경될 때 마다 특정 event를 받아올 수 있음
        // activeIndex는 현재 active되어 있는 슬라이더의 index를 의미함. animation추가할 때 필요함.
        // onSlideChange={(e: any) => {
        //   // 시작 슬라이더인지 아닌지 boolean 반환
        //   setIsBeginning(e.isBeginning);
        //   // 마지막 슬라이더인지 아닌지 boolean 반환
        //   setIsEnd(e.isEnd);
        // }}
        // onSwiper={(swiper: SwiperCore) => {
        //   // Swiper의 navigation을 커스텀 버튼에 연결
        //   if (swiper && swiper.params.navigation) {
        //     const navigation = swiper.navigation;
        //     if (navigation && prevRef.current && nextRef.current) {
        //       navigation.prevEl = prevRef.current;
        //       navigation.nextEl = nextRef.current;
        //       navigation.init();
        //       navigation.update();
        //     }
        //   }
        // }}
        navigation={true} // navigation true 설정
        pagination={{
          // 페이지네이션 활성화
          clickable: true, // 페이지네이션 버튼 클릭 가능하게 할지 말지
        }}
      >
        {bannerContents.map((content, index) => (
          <SwiperSlide key={content._id}>
            <Link to={`/contents/${content._id}`}>
              <div className="rounded shadow-md text-[#FFFFFF] overflow-hidden w-full h-[290px]">
                <img
                  src={content.imageUrl}
                  alt={content.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-[60%] left-[7%] whitespace-pre-wrap w-[90%]">
                  <div className="font-bold text-[40px] mt-1 whitespace-pre-wrap">
                    {content.name}
                  </div>
                  <div className="text-[16px] whitespace-pre-wrap">
                    {content.description}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {/* <button ref={prevRef} className="swiper-button-prev-banner"></button>
        <button ref={nextRef} className="swiper-button-next-banner"></button> */}
      </Swiper>
    </>
  );
};

export default BannerList;
