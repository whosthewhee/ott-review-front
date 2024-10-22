import React from "react";
import { Link } from "react-router-dom";
import { produtionCompany } from "../types/Content";

interface ContentCardProps {
  _id: string;
  title: string;
  rating: number;
  imageUrl: string;
  platformName: string;
  categoryName: string;
  typeName: string;
  produtionCompany: produtionCompany;
  isRanking?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({
  _id,
  title,
  rating,
  imageUrl,
  platformName,
  categoryName,
  typeName,
  produtionCompany,
  isRanking,
}) => {
  return (
    <Link to={`/contents/${_id}`}>
      {/* {isRanking && (<div>1</div>)} */}
      <div className="rounded shadow-md overflow-hidden sm:w-40 lg:w-68 text-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </Link>
  );
};

export default ContentCard;
