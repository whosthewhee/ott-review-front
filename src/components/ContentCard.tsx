import React from "react";

interface ContentCardProps {
  title: string;
  rating: number;
  imageUrl: string;
  platform_nm: string;
  category_nm: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  rating,
  imageUrl,
  platform_nm,
  category_nm,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden w-52 text-center bg-[#ffffff]">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500">Platform: {platform_nm}</p>
        <p className="text-sm text-gray-500">Category: {category_nm}</p>
        <p className="text-sm text-yellow-500">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default ContentCard;
