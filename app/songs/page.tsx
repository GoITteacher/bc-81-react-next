import { fetchSongs } from "@/lib/songs";
import css from "./Page.module.css";

const Page = async () => {
  const result = await fetchSongs();

  return (
    <div className={css["page"]}>
      <h1>Songs</h1>
      <div className={css["stats"]}>
        <p>Total Songs - {result.totalItems}</p>
        <p>Total Pages - {result.totalPages}</p>
      </div>
      <ul className={css["songList"]}>
        {result.items.map((el) => {
          return (
            <li className={css["songItem"]} key={el._id}>
              <h2>{el.title}</h2>
              <p>{el.artist}</p>
              <p>{el.album}</p>
              <span>
                {el.genre} - {el.releaseYear}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
