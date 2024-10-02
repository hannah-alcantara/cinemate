import Title from "../../components/Title";
import { useState, useEffect } from "react";
import fetchMovies from "../../services/fetchMovies";
import fetchConfig from "../../services/fetchConfig";
import Movie from "../../components/Movie";

const HorizontalList = ({ endpoint }) => {
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
      // console.log("Now Playing:", movieData);
    };

    getMovies();
    getConfig();
  }, [endpoint]);

  return (
    <section className='p-8 max-w-screen-xl mx-auto'>
      <Title to='/nowplaying' text='In Theaters' />
      <div className='grid grid-flow-col gap-6 overflow-x-auto overscroll-x-contain my-8'>
        {/* style scroll wheel */}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} config={config} />
        ))}
      </div>
    </section>
  );
};

export default HorizontalList;
