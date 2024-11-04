import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../types/User";

interface AuthStore {
  user: User | null;
}

interface AuthAction {
  setLoggedIn: (user: User) => void;
  setLoggedOut: () => void;
}

export const useAuthStore = create(
  persist<AuthStore & AuthAction>(
    (set, get) => ({
      user: null,
      setLoggedIn: (user: User) => set({ user }),
      setLoggedOut: () => set({ user: null }),
    }),
    // 코파일럿에 해당 소스코드 물어보기
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// export const useAuthStore = create<AuthStore & AuthAction>((set) => ({
//   user: null,
//   setLoggedIn: (user: User) => set({ user }),
//   setLoggedOut: () => set({ user: null }),
// }));
