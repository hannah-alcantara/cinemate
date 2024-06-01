import { Link } from "react-router-dom";
import Movies from "../movies.json";
import Title from "./Title";

export function NowPlayingList() {
  return (
    <section className='p-8'>
      <Title to='/nowplaying' text='In Theaters' />
      <div className='grid grid-flow-col auto-cols-[34%] gap-5 overflow-x-auto overscroll-x-contain mt-8'>
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <li key={movie.id} className='list-none'>
            <div className='relative'>
              <Link to='/details'>
                {/* //Only for Desktop
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                  <FontAwesomeIcon icon={faEye} />
                  <FontAwesomeIcon icon={faHeart} className="mx-2" />
                  <FontAwesomeIcon icon={faBookmark} />
                </div> */}
                <img
                  src={movie.poster_path}
                  alt='Poster'
                  className='shadow-inner border border-gray-800 rounded-sm'
                />
              </Link>
            </div>
            <Link className='inline-block font-medium mt-3 mb-1'>
              {movie.title}
            </Link>
            <p className='font-courier text-xs'>{movie.release_date}</p>
          </li>
        ))}

        {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
      </div>
    </section>
  );
}

// import { useEffect } from "react";

// const API_URL =
//   "https://api.themoviedb.org/3/movie/popular?api_key=c7f15f2d472ec4d04c9a74c40c3d2678";

// const getMovies = async () => {
//   try {
//     const res = await fetch(API_URL);
//     const movies = await res.json();
//     console.log("movies", movies);
//     setMovies(movies.results);
//   } catch (e) {
//     console.error(e);
//   }
// };

// //fire this function the first time this page loads
// useEffect(() => {
//   getMovies();
// }, []);
