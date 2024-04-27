import Movies from "../movies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export function TopRatedMoviesList() {
  return (
    <section className="p-8">
      <div className="flex items-center">
        <h2 className="font-oswald font-medium text-2xl uppercase">
          Top Rated
        </h2>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-lg ml-2 text-gray-200"
        />
      </div>
      <div className="grid grid-flow-col auto-cols-[64%] gap-5 overflow-x-auto overscroll-x-contain mt-8">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <div className="bg-black rounded h-fit">
            <a href="#">
              <img
                src={movie.backdrop_path}
                alt="Poster"
                className="rounded-t"
              />
            </a>
            <div className="px-4 py-5">
              <a className="font-source inline-block font-black">
                {movie.title}
              </a>
              <p className="font-source text-xs leading-5">
                {movie.release_date}
              </p>
              <p className="text-xs line-clamp-3 text-gray-300 mt-3">
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
