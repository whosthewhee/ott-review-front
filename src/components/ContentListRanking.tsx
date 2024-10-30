/*eslint-disable*/
import { useState } from "react";
import { Content } from "../types/Content";
import ContentCard from "./ContentCard";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type ContentListRankingProps = {
  contents: Content[];
};

const ContentListRanking = ({ contents }: ContentListRankingProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  // const [isBeginning, setIsBeginning] = useState(true);
  // const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    // 이전으로 이동
    swiper?.slidePrev();
  };

  const handleNext = () => {
    // 다음으로 이동
    swiper?.slideNext();
  };

  return (
    <Swiper
      modules={[Navigation]} // 페이지네이션, 자동재생 등의 기능을 불러옴
      spaceBetween={100} // 슬라이더 간의 간격 지정
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
      //   console.log(e.isBeginning);
      //   setSwiper(e);
      // }}
      navigation={false} // 네비게이션 활성화
      watchOverflow={true} // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      // pagination={{
      //   // 페이지네이션 활성화
      //   clickable: true, // 페이지네이션 버튼 클릭 가능하게 할지 말지
      // }}
    >
      {contents.map((content, index) => (
        <SwiperSlide key={content._id}>
          <div className="flex gap-2">
            <div className="flex text-7xl text-[#ffffff] items-end">
              {index + 1}
            </div>
            <ContentCard {...content} isRanking />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentListRanking;
