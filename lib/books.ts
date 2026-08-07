import { GetBooksResponse } from "@/types/books";
import { globalApi } from "./serverConfig";

interface GetBooksParams {
  title?: string;
  author?: string;
  desc?: string;
}

export const getBooks = async (params?: GetBooksParams) => {
  const res = await globalApi.get<GetBooksResponse>("/public/books", {
    params,
  });
  return res.data;
};
