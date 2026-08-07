import { GetSongsResponse, Song } from "@/types/songs";
import { globalApi } from "./serverConfig";

export const getSongs = async (artist?: string) => {
  const params = { artist: artist, perPage: 100 };
  const res = await globalApi.get<GetSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

export const getSongById = async (id: string) => {
  const res = await globalApi.get<Song>(`/public/songs/${id}`);
  return res.data;
};
