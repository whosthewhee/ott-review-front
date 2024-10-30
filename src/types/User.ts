export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export interface User {
  _id?: string; // 회원가입 시 _id는 자동 생성되므로 선택적(optional)
  email: string;
  password?: string;
  isDeleted?: boolean;
  //내장 도큐먼트
  userinfo?: userInfo; // 선택적으로 userinfo 포함
}

export interface userInfo {
  nickname?: string;
  imageUrl?: string;
  favoriteContents?: string[];
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export type UserActionTypes = LoginSuccessAction;
