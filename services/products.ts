import { GetProductResponse } from "@/types/products";
import { serverApi } from "./serverConfig";

export const getProducts = async () => {
  const params = {
    perPage: 50,
  };
  const res = await serverApi.get<GetProductResponse>("/products", { params });
  return res.data;
};
