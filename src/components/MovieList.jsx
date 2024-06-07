import { useEffect, useState } from "react";
import Movie from "./Movie";
import ConfigService from "./Services/ConfigService";
import MovieService from "./Services/MovieService";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  const getMovies = async () => {
    try {
      const movieData = await MovieService();
      setMovies(movieData.results);
      console.log("movieData", movieData);
    } catch (error) {
      console.error(error);
    }
  };

  const getConfig = async () => {
    try {
      const configData = await ConfigService();
      setConfig(configData);
      console.log("configData", configData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <div className='p-8'>
      <ul className='grid grid-cols-3 gap-5 text-center'>
        {movies.map((movie) => (
          // <div key={movie.id}>{movie.title}</div>
          <Movie key={movie.id} movie={movie} config={config} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
