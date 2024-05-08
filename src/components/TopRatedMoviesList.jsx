import Movies from "../movies.json";
import { Title } from "./Title";

export function TopRatedMoviesList() {
  return (
    <section className='p-8'>
      <Title to='/toprated' text='Top Rated' />
      <div className='grid grid-flow-col auto-cols-[64%] gap-5 overflow-x-auto overscroll-x-contain mt-8'>
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <div className='bg-black rounded h-fit'>
            <a href='#'>
              <img
                src={movie.backdrop_path}
                alt='Poster'
                className='rounded-t'
              />
            </a>
            <div className='px-4 py-5'>
              <a className='font-source inline-block font-black'>
                {movie.title}
              </a>
              <p className='font-source text-xs leading-5'>
                {movie.release_date}
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
