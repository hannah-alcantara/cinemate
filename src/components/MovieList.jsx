import { useEffect, useState } from "react";
import Movies from "../movies.json";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import MovieService from "./Services/MovieService";

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movieData = await MovieService();
      console.log("movieData", movieData);
      setMovies(movieData.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='p-8'>
      <ul className='grid grid-cols-3 gap-5 text-center'>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
          // <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
