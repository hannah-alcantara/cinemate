import { useEffect, useState } from "react";
import ConfigService from "./Services/ConfigService";
import MovieService from "./Services/MovieService";
import Movie from "../movies.json";
import { Link } from "react-router-dom";

export function Hero() {
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  const getMovies = async () => {
    try {
      const movieData = await MovieService();
      setMovies(movieData.results);
      // console.log("movieData", movieData);
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
    <section className='bg-black text-white'>
      {/* <div className='relative grid grid-cols-4 gap-4 px-5 pb-5'>
        {Movie.slice(0, 4).map((movie) => {
          return (
            <div>
              <img
                src={movie.backdrop_path}
                alt='Backdrop'
                className='h-auto max-w-full rounded-lg grayscale hover:grayscale-0 duration-500'
              />
            </div>
          );
        })}
      </div> */}
      <div className='relative grid gap-4 px-4'>
        {movies.slice(0, 1).map((movie) => {
          return (
            <Link to='/details'>
              {config.images?.base_url && (
                <img
                  className='h-auto max-w-full rounded-lg grayscale hover:grayscale-0 duration-700'
                  src={config.images.base_url + "w780" + movie.backdrop_path}
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
      <div className='grid grid-cols-4 gap-4 p-5'>
        {movies.slice(1, 5).map((movie) => {
          return (
            <Link to='/details'>
              {config.images?.base_url && (
                <img
                  className='h-auto max-w-full rounded-lg grayscale hover:grayscale-0 duration-700'
                  src={config.images.base_url + "w780" + movie.backdrop_path}
                  alt={movie.title + " Poster"}
                />
              )}
              {/* <h1 className='absolute bottom-0 pb-4 pl-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] font-oswald text-2xl'>
                {movie.title}
              </h1> */}
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
}

//SEARCH BAR
{
  /* <div className="text-gray-600 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <input type="text" placeholder="search" className=" bg-white h-6 p-2" />
  <button type="submit" className="absolute top-2 right-0">
    <FontAwesomeIcon icon={faMagnifyingGlass} /> 
  </button>
</div>; */
}
