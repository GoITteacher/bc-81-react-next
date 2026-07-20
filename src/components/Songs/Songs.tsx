import { useState } from "react";
import {
  createSong,
  fetchSongs,
  NewSongBody,
  Song,
} from "../../services/songService";
import css from "./Songs.module.css";
import SongsForm from "./SongsForm/SongsForm";
import SongsList from "./SongsList/SongsList";
import CreateSongForm from "./CreateSongForm/CreateSongForm";

const Songs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (artist: string) => {
    setIsLoading(true);

    const res = await fetchSongs(artist);
    setSongs(res.items);

    setIsLoading(false);
  };

  const handleCreate = async (body: NewSongBody) => {
    setIsLoading(true);

    try {
      const res = await createSong(body);
      setSongs([res, ...songs]);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["songs"]}>
      <div>
        <SongsForm callback={handleSearch} />
        <CreateSongForm onSubmit={handleCreate} />
      </div>

      {isLoading && <p>LOADING</p>}
      {!isLoading && <SongsList songs={songs} />}
    </div>
  );
};

export default Songs;
