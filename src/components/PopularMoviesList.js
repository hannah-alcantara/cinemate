import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function PopularMoviesList() {
  return (
    //ADD: Filter
    <div className="p-6 bg-m-grey">
      <div class="flex items-center pb-6">
        <h2 class="font-oswald font-bold text-lg text-white">Popular</h2>
      </div>
      <div className="grid grid-flow-col auto-cols-[36%] gap-4 overflow-x-auto overscroll-x-contain">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => {
          return (
            <div className="">
              <a href="#">
                <img
                  src={movie.poster_path}
                  alt="Poster"
                  className="border border-slate-700"
                />
              </a>
              <a className="font-courier font-bold text-sm inline-block my-2">
                {movie.title}
              </a>
              <p className="font-source text-xs"> {movie.release_date}</p>
            </div>
          );
        })}
        {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
      </div>
    </div>
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
