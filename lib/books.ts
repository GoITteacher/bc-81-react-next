import { FetchBooksResponse } from "@/types/books";
import { serverApi } from "./serverConfig";

export const fetchBooks = async () => {
  const result = await serverApi.get<FetchBooksResponse>("/public/books");
  return result.data;
};
