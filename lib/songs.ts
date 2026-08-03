import { FetchSongsResponse } from "@/types/songs";
import { serverApi } from "./serverConfig";

export const fetchSongs = async () => {
  const result = await serverApi.get<FetchSongsResponse>("/public/songs");
  return result.data;
};
