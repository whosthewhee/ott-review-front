import React from "react";

interface ContentCardProps {
  title: string;
  platform: string;
  rating: number;
  imageUrl: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  platform,
  rating,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden w-52 text-center">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500">Platform: {platform}</p>
        <p className="text-sm text-yellow-500">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default ContentCard;
