import { proxyApi } from "./server-config";

export const getProducts = async (params: any) => {
  const res = await proxyApi.get("/products", { params });
  return res.data;
};
export const createProduct = async (body: any) => {
  const res = await proxyApi.post("/products", body);
  return res.data;
};

export const getProductById = async (id: string) => {
  const res = await proxyApi.get(`/products/${id}`);
  return res.data;
};

export const updateProduct = async (id: string, body: any) => {
  const res = await proxyApi.patch(`/products/${id}`, body);
  return res.data;
};
export const deleteProduct = async (id: string) => {
  const res = await proxyApi.patch(`/products/${id}`);
  return res.data;
};
