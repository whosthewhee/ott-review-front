import React from "react";

interface ContentCardProps {
  title: string;
  rating: number;
  imageUrl: string;
  platformName: string;
  categoryName: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  rating,
  imageUrl,
  platformName,
  categoryName,
}) => {
  return (
    <div className="border border-gray-300 rounded shadow-md overflow-hidden w-52 text-center gap-2">
      <img src={imageUrl} alt={title} className="w-full h-[90%] object-cover" />

      <div className="font-bold text-md text-[#ffffffde] mb-2">{title}</div>
      {/* <p className="text-sm text-gray-500">Platform: {platformName}</p>
        <p className="text-sm text-gray-500">Category: {categoryName}</p>
        <p className="text-sm text-yellow-500">Rating: {rating} / 5</p> */}
    </div>
  );
};

export default ContentCard;
