import { LoginBody, RegisterBody } from "@/types/auth";
import { proxyApi } from "./server-config";

export const register = async (body: RegisterBody) => {
  const res = await proxyApi.post("/auth/register", body);
  return res.data;
};
export const login = async (body: LoginBody) => {
  const res = await proxyApi.post("/auth/login", body);
  return res.data;
};
export const refresh = async () => {};
export const logout = async () => {};
export const getMe = async () => {};
