import { LoginBody, RegisterBody, User } from "@/types/auth";
import { proxyApi } from "./server-config";

export const register = async (body: RegisterBody) => {
  const res = await proxyApi.post("/auth/register", body);
  return res.data;
};

export const login = async (body: LoginBody) => {
  const res = await proxyApi.post("/auth/login", body);
  return res.data;
};

export const refresh = async () => {
  const res = await proxyApi.post<{ success: boolean }>("/auth/refresh");
  return res.data;
};

export const logout = async () => {
  const res = await proxyApi.post("/auth/logout");
  return res.data;
};
export const getMe = async () => {
  const res = await proxyApi.get<User>("/auth/me");
  return res.data;
};
