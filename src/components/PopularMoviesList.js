import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faHeart,
  faEye,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { MovieDetail } from "./MovieDetail";
import { Link } from "react-router-dom";

export function PopularMoviesList() {
  return (
    //ADD: Filter
    <section className="p-8">
      <div className="flex items-center">
        <h2 className="font-oswald font-medium text-2xl uppercase">Popular</h2>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-lg ml-2 text-gray-200"
        />
      </div>
      <div className="grid grid-flow-col auto-cols-[34%] gap-5 overflow-x-auto overscroll-x-contain mt-8">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <li className="list-none">
            <div className="relative">
              <a to="/details">
                {/* //Only for Desktop
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                  <FontAwesomeIcon icon={faEye} />
                  <FontAwesomeIcon icon={faHeart} className="mx-2" />
                  <FontAwesomeIcon icon={faCirclePlus} />
                </div> */}
                <img
                  src={movie.poster_path}
                  alt="Poster"
                  className="shadow-2xl border border-gray-800 rounded-sm"
                />
              </a>
            </div>
            <a className="inline-block font-medium mt-3 mb-1">{movie.title}</a>
            <p className="font-courier text-xs">{movie.release_date}</p>
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
