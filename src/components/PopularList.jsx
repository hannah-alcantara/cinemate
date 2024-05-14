import { Link } from "react-router-dom";
import Movies from "../movies.json";
import Title from "./Title";

export function PopularList() {
  return (
    <section className='p-8'>
      <Title to='/popular' text='Popular' />
      {Movies.map((movie) => {
        return (
          <div className='relative overflow-hidden my-8'>
            <div className='group relative m-0 flex'>
              <div className='z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-85 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70'>
                <Link href=''>
                  <img
                    src={movie.backdrop_path}
                    alt='Poster'
                    className='animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110'
                  />
                </Link>
              </div>
              <div className='absolute bottom-0 z-20 pb-4 pl-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'>
                <Link className='font-serif text-2xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]'>
                  {movie.title}
                </Link>
                <h2 className='text-sm font-light text-gray-200 font-courier'>
                  {movie.release_date}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
