import { useEffect, useState } from "react";
// import Movies from "../movies.json";
import { Filter } from "./Filter";
import Movie from "./Movie";
import fetchConfig from "../services/fetchConfig";
import fetchMovies from "../services/fetchMovies";

const MovieList = ({ endpoint }) => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  const getConfig = async () => {
    const configData = await fetchConfig();
    setConfig(configData);
    // console.log("configData", configData);
  };

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies(endpoint);
      setMovies(movieData.results);
      // console.log(movieData.results);
    };

    getMovies();
    getConfig();
  }, [endpoint]);

  return (
    <div className='p-8'>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className='grid grid-cols-3 gap-5 text-center'>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} movie={movie} config={config} />
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
