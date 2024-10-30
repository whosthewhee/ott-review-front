import { create } from "zustand";
import { User } from "../types/User";

interface AuthStore {
  user: User | null;
}

interface AuthAction {
  setLoggedIn: (user: User) => void;
  setLoggedOut: () => void;
}

export const useAuthStore = create<AuthStore & AuthAction>((set) => ({
  user: null,
  setLoggedIn: (user: User) => set({ user }),
  setLoggedOut: () => set({ user: null }),
}));
