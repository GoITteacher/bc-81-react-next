import { useState } from "react";
import { getMovies, Movie } from "../../services/movieService";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchMovies = async (query: string) => {
    setIsLoading(true);

    try {
      const res = await getMovies(query);
      setMovies(res.items);
    } catch {
      setMovies([]);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["movies"]}>
      <h3>Movies</h3>
      <SearchForm onSubmit={handleSearchMovies} />

      {isLoading && <p>Loading ...</p>}

      <ul>
        {movies.map((el) => {
          return (
            <li key={el._id}>
              {el.title}-{el.director}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
