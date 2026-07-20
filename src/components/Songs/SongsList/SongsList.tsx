import { Song } from "../../../services/songService";
import css from "./SongsList.module.css";

interface SongsListProps {
  songs: Song[];
}

const SongsList = ({ songs }: SongsListProps) => {
  return (
    <ul className={css["songsList"]}>
      {songs.map((el) => {
        return (
          <li key={el._id}>
            {el.artist} - {el.title}
          </li>
        );
      })}
    </ul>
  );
};

export default SongsList;
