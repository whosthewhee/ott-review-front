import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../types/User";

interface AuthStore {
  user: User | null;
  accessToken: string | null;
}

interface AuthAction {
  setLoggedIn: (user: User, accessToken: string) => void;
  setLoggedOut: () => void;
}

export const useAuthStore = create(
  //상태를 생성
  persist<AuthStore & AuthAction>( //상태를 로컬스토리지에 저장 및 불러오기
    (set, get) => ({
      user: null,
      accessToken: null,
      setLoggedIn: (user: User, accessToken: string) =>
        set({ user, accessToken }),
      setLoggedOut: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), //상태를 저장할 스토리지 지정
    }
  )
);
