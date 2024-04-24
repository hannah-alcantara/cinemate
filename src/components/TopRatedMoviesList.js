import Movies from "../movies.json";

export function TopRatedMoviesList() {
  return (
    <section className="p-8">
      <h2 className="font-oswald font-medium text-2xl uppercase">
        Top Rated
      </h2>
      <div className="grid grid-flow-col auto-cols-[64%] gap-5 overflow-x-auto overscroll-x-contain mt-8 my-6">
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
