import { getSongs } from "@/lib/songs";
import css from "./SongList.module.css";
import { sleep } from "@/utils/sleep";

const SongList = async () => {
  await sleep(4000);
  const songsResponse = await getSongs();
  const songs = songsResponse.items;
  return (
    <ul className={css["list"]}>
      {songs.map((el) => {
        return (
          <li key={el._id}>
            {el.title} - {el.artist}
          </li>
        );
      })}
    </ul>
  );
};

export default SongList;
