"use client";
import css from "./SongsClient.module.css";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songs";

const SongsClient = () => {
  const [artist, setArtist] = useState("");

  const songsQuery = useQuery({
    queryKey: ["songs", artist],
    queryFn: () => getSongs(artist),
    refetchOnMount: false,
  });

  const songs = songsQuery.data?.items || [];

  const handleSearch = (formData: FormData) => {
    const value = formData.get("artist") as string;
    setArtist(value);
  };

  return (
    <main>
      <form action={handleSearch}>
        <input type="text" name="artist" />
        <button>Search songs</button>
      </form>

      <ul>
        {songs.map((el) => {
          return (
            <li key={el._id}>
              {el.title} - {el.artist}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SongsClient;
