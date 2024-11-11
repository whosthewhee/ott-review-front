import { Review } from "@/types/Review";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-2 text-[#5E5E64]">
        {reviews.map((review) => (
          <div key={review._id} className="grid rounded bg-[#F1F1F1] py-0 px-3">
            <div className="flex gap-x-2 items-center border-b-[1px] border-[#E0E0E0] py-2 justify-between">
              <div className="flex gap-x-2 items-center text-[#1F1F1F] font-semibold text-[16px]">
                <img
                  src={review.users.userinfo?.imageUrl}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{review.users.userinfo?.nickname}</span>
              </div>
              <div className="border border-[#B6B6B6] rounded-lg py-1 px-3">
                {review.rating === 0 ? (
                  <span>보는 중</span>
                ) : (
                  <span className="flex gap-x-2 items-center">
                    <FaStar />
                    {review.rating}
                  </span>
                )}
              </div>
            </div>

            <div className="h-40 border-b-[1px] border-[#E0E0E0] py-2 text-[15px]">
              <span>{review.content}</span>
            </div>

            <div className="flex items-center gap-x-3 py-2">
              <span className="flex gap-x-1 items-center">
                <FaThumbsUp /> 10
              </span>
              <span className="flex gap-x-1 items-center">
                <BiSolidMessageRounded /> 2
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewList;
