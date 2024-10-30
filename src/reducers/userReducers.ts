import { LOGIN_SUCCESS, UserActionTypes, User } from "../types/User";

// 초기 상태 정의
const initialState: User | null = null;

// 리듀서 함수 정의
const userReducer = (
  state = initialState,
  action: UserActionTypes
): User | null => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
