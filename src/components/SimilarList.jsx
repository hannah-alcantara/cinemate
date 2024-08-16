import { useState, useEffect } from "react";
import fetchConfig from "../services/fetchConfig";
import Movie from "./Movie";
import { useParams } from "react-router-dom";

const SimilarList = () => {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);
  const { id } = useParams();

  const getConfig = async () => {
    const configData = await fetchConfig();
    setConfig(configData);
    // console.log("configData", configData);
  };

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API}`
      );
      const similarData = await response.json();
      setMovies(similarData.results);
      // console.log("trending data", similarData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
    getConfig();
  });

  return (
    <section className='p-8'>
      <h2 className='font-oswald font-medium text-xl uppercase text-white'>
        You may also like
      </h2>
      <div className='grid grid-flow-col auto-cols-[34%] gap-5 overflow-x-auto overscroll-x-contain mt-8 text-white'>
        {movies.slice(0, 9).map((movie) => (
          <Movie key={movie.id} movie={movie} config={config} />
        ))}
      </div>
    </section>
  );
};

export default SimilarList;
