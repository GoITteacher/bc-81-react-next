import { fetchMovies } from "@/lib/movies";
import css from "./Page.module.css";

const Page = async () => {
  const result = await fetchMovies();

  return (
    <div className={css["page"]}>
      <h1>Movies</h1>

      <div className={css["stats"]}>
        <p>Total Movies - {result.totalItems}</p>
        <p>Total Pages - {result.totalPages}</p>
      </div>

      <ul className={css["movieList"]}>
        {result.items.map((el) => {
          return (
            <li className={css["movieItem"]} key={el._id}>
              <h2>{el.title}</h2>
              <p>{el.director}</p>
              <p>{el.summary}</p>
              <span>
                {el.genre} - {el.releaseYear} - {el.rating}/10
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
