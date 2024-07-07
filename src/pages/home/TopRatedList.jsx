import { Link } from "react-router-dom";
import Movies from "../../movies.json";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import fetchConfig from "../../components/Services/fetchConfig";
import fetchMovies from "../../components/Services/fetchMovies";

const TopRatedList = ({endpoint}) => {

  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState([]);

  const getConfig = async () => {
    const configData = await fetchConfig();
    setConfig(configData);
    // console.log('config', configData)
  }

  useEffect(() => {
    const getMovies = async () => {
      const topRatedData = await fetchMovies(endpoint)
      setMovies(topRatedData.results)
      // console.log("Top Rated", topRatedData.results)
    }

    getMovies()
    getConfig()
  }, [endpoint]);

  return (
    <section className='p-8'>
      <Title to='/toprated' text='Top Rated' />
      <div className='grid grid-flow-col auto-cols-[64%] gap-5 overflow-x-auto overscroll-x-contain mt-8'>
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {movies.slice(0, 5).map((movie) => (
          <div key={movie.id} className='bg-black rounded h-fit'>
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
            <div className='px-4 py-5 text-white'>
              <Link className='text-sm font-source inline-block font-black '>
                {movie.title}
              </Link>
              <p className='font-source text-xs leading-5'>
                {movie.release_date ? movie.release_date.split("-")[0]:""}
              </p>
              <p className='text-xs line-clamp-3 text-gray-300 mt-3'>
                {movie.overview}
              </p>
            </div>
          </div>
        ))}

        {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
      </div>
    </section>
  );
}

export default TopRatedList;
