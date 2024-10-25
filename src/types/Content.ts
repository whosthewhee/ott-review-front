import { Category } from "./Category";
import { Platform } from "./Platform";

export interface Content {
  _id: string;
  title: string;
  rating: number;
  imageUrl: string;
  typeName: string;
  produtionCompany: produtionCompany; //내장 도큐먼트
  platformName: string;
  categoryName: string;
}

export interface produtionCompany {
  name: string;
  founded: number;
  country: string;
}
