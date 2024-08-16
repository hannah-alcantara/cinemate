import { useEffect, useState } from "react";
import ConfigService from "../../services/fetchConfig";
import { Link } from "react-router-dom";

const Hero = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  //Note: Did not use fetchMovie service here bc needed to add {time_window}
  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API}`
      );
      const trendingData = await response.json();
      setMovies(trendingData.results);
    } catch (e) {
      console.error(e);
    }
  };

  const getConfig = async () => {
    const configData = await ConfigService();
    setConfig(configData);
    // console.log("configData", configData);
  };

  useEffect(() => {
    getMovies();
    getConfig();
  });

  return (
    <section className='bg-black text-white'>
      {/* Big Pic */}
      <div className='relative grid gap-4 px-4'>
        {movies.slice(0, 1).map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              {config.images?.base_url && (
                <img
                  className='h-auto max-w-full rounded-lg'
                  src={
                    config.images.base_url + "original" + movie.backdrop_path
                  }
                  // backdrop_sizes: ['w300', 'w780', 'w1280', 'original']
                  alt={movie.title + " Poster"}
                />
              )}
              <h1 className='absolute bottom-0 pb-4 pl-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] font-oswald text-2xl'>
                {movie.title}
              </h1>
            </Link>
          );
        })}
      </div>

      {/* 4 col row */}
      <div className='grid grid-cols-4 gap-4 p-5'>
        {movies.slice(1, 5).map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              {config.images?.base_url && (
                <img
                  className='h-auto max-w-full rounded-lg'
                  src={
                    config.images.base_url + "original" + movie.backdrop_path
                  }
                  alt={movie.title + " Poster"}
                  // grayscale hover:grayscale-0 duration-700
                />
              )}
            </Link>
          );
        })}
        {/* <span className='bg-black absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='font-courier font-medium whitespace-nowrap text-xs p-2'>
            Your Personal Collection of Cinematic Masterpieces
          </h1>
        </span> */}
      </div>
    </section>
  );
};

export default Hero;
