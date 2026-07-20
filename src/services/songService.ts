import axios from "axios";
import { serverAPI } from "./serverConfig";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface FetchSongsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Song[];
}

export const fetchSongs = async (artistValue: string) => {
  const params = {
    artist: artistValue,
  };

  const res = await serverAPI.get<FetchSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

//!=========================================

export interface NewSongBody {
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}

export const createSong = async (song: NewSongBody) => {
  const res = await serverAPI.post<Song>("/public/songs", song);
  return res.data;
};
