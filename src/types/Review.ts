import { Content } from "./Content";
import { User } from "./User";

export interface Review {
  rating: number;
  content: string;
  seq: number;
  createdDate: string;
  updatedDate: string;
  isDeleted: boolean;
  //참조 도큐먼트 (contents, users)
  contents: Content;
  users: User;
}
