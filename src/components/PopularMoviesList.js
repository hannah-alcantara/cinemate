import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight, faHeart, faEye,faCirclePlus
} from "@fortawesome/free-solid-svg-icons";

export function PopularMoviesList() {
  return (
    //ADD: Filter
    <section className="p-8">
      <div className="flex items-center">
      <h2 className="font-oswald font-medium text-2xl uppercase">
        Popular
      </h2>
      {/* <FontAwesomeIcon icon={faAngleRight} className="text-lg ml-2 text-gray-200"/> */}
      </div>
      <div className="grid grid-flow-col auto-cols-[34%] gap-5 overflow-x-auto overscroll-x-contain mt-8 my-6">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <div>
            <div className="relative">
              <a href="#">
              <span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faEye} className="mr-2"/>
                <FontAwesomeIcon icon={faHeart} className="mr-2"/>
                <FontAwesomeIcon icon={faCirclePlus}/>
              </span>
                <img
                  src={movie.poster_path}
                  alt="Poster"
                  className="shadow-2xl border border-gray-800 rounded-sm"
                  />
              </a>
            </div>
            <a className="inline-block font-medium mt-3 mb-1">{movie.title}</a>
            <p className="font-courier text-xs">{movie.release_date}</p>
          </div>
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
