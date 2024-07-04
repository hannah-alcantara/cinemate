import { Link } from "react-router-dom";
import Movies from "../../movies.json";
import Title from "../../components/Title";
import fetchMovies from "../../components/Services/fetchMovies";
import { useState, useEffect } from "react";
import fetchConfig from "../../components/Services/fetchConfig";

const PopularList = ({ endpoint }) => {
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
      console.log("Popular:", movieData);
    };

    getMovies();
    getConfig();
  }, [endpoint]);

  return (
    <section className='p-8'>
      <Title to='/popular' text='Popular' />
      {movies.slice(0, 3).map((movie, index) => {
        return (
          <div key={index} className='relative overflow-hidden my-8'>
            <div className='group relative m-0 flex'>
              <div className='z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-85 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70'>
                <Link to={`/movie/${movie.id}`}>
                  {config.images?.base_url && (
                    <img
                      className='animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110'
                      src={
                        config.images.base_url +
                        "original" +
                        movie.backdrop_path
                      }
                      alt={movie.title + " Poster"}
                    />
                  )}
                </Link>
              </div>
              <div className='absolute bottom-0 z-20 pb-4 pl-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'>
                <Link className='font-serif text-2xl font-bold  [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] text-white'>
                  {movie.title}
                </Link>
                <h2 className='text-xs font-light text-gray-200 font-courier'>
                  {movie.release_date ? movie.release_date.split("-")[0] : ""}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PopularList;
