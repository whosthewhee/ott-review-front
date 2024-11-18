/*eslint-disable*/
import { useState } from "react";
import { Content } from "../types/Content";
import ContentCard from "./ContentCard";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

type ContentListProps = {
  contents: Content[];
  categoryName: string;
};

const ContentList = ({ contents, categoryName }: ContentListProps) => {
  const filteredContents = contents.filter(
    (content) => content.categoryName === categoryName
  );

  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  //   console.log(categoryName);
  //   console.log(filteredContents);
  //   console.log("====================================");

  const handlePrev = () => {
    // 이전으로 이동
    swiper?.slidePrev();
  };

  const handleNext = () => {
    // 다음으로 이동
    swiper?.slideNext();
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]} // 페이지네이션, 자동재생 등의 기능을 불러옴
        spaceBetween={50} // 슬라이더 간의 간격 지정
        slidesPerView={4} // 한 슬라이더 당 보여져야하는 슬라이드 갯수
        // 슬라이더가 변경될 때 마다 특정 event를 받아올 수 있음
        // activeIndex는 현재 active되어 있는 슬라이더의 index를 의미함. animation추가할 때 필요함.
        // onSlideChange={(e: any) => {
        //   // 시작 슬라이더인지 아닌지 boolean 반환
        //   setIsBeginning(e.isBeginning);
        //   // 마지막 슬라이더인지 아닌지 boolean 반환
        //   setIsEnd(e.isEnd);
        // }}
        // onSwiper={(e: any) => {
        //   setSwiper(e);
        // }}
        navigation={true} // 네비게이션 활성화
        // autoplay={{
        //   // 자동 재생
        //   delay: 5000, // 지연 시간 (한 슬라이더에 머물르는 시간)
        //   disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
        // }}
        //speed={5000} // 슬라이더 넘어가는 속도
        // pagination={{
        //   // 페이지네이션 활성화
        //   clickable: true, // 페이지네이션 버튼 클릭 가능하게 할지 말지
        // }}
      >
        {filteredContents.map((content, index) => (
          <SwiperSlide key={content._id}>
            <ContentCard {...content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ContentList;
