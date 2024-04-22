import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function PopularMoviesList() {
  return (
    //ADD: Filter
    <section className="p-8 pb-0">
      <h2 className="font-oswald font-medium text-2xl uppercase mb-8">
        Popular
      </h2>
      <div className="grid grid-flow-col auto-cols-[34%] gap-5 overflow-x-auto overscroll-x-contain">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <div>
            <a href="#">
              <img
                src={movie.poster_path}
                alt="Poster"
                className="shadow-2xl border border-gray-800 rounded-sm"
              />
            </a>
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
