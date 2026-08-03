import { FetchMoviesResponse } from "@/types/movies";
import { serverApi } from "./serverConfig";

export const fetchMovies = async () => {
  const result = await serverApi.get<FetchMoviesResponse>("/public/movies");
  return result.data;
};
