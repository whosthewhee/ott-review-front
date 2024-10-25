export interface User {
  _id: string;
  email: string;
  password: string;
  isDeleted: boolean;
  //내장 도큐먼트
  userinfo: userInfo;
}

export interface userInfo {
  nickname: string;
  imageUrl: string;
  favoriteContents: string[];
}
