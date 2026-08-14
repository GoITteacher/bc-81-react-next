import { User } from "@/types/auth";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  isAuth: boolean;

  setUser: (newUser: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()((setStore) => {
  return {
    user: null,
    isAuth: false,

    setUser: (newUser) => {
      setStore({ user: newUser, isAuth: true });
    },

    clearAuth: () => {
      setStore({ user: null, isAuth: false });
    },
  };
});
