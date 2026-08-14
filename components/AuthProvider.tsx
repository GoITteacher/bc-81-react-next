"use client";
import { getMe, refresh } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuth = useAuthStore((s) => s.isAuth);
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      if (isAuth) {
        return;
      }

      const { success } = await refresh();

      if (!success) {
        router.push("/sign-in");
      }

      const user = await getMe();

      if (user) {
        setUser(user);
      } else {
        router.push("/sign-in");
      }
    }

    fetchUser();
  }, []);

  return children;
};

export default AuthProvider;
