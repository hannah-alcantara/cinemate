import Movies from "../movies.json";

export function TopRatedMoviesList() {
  return (
    <section className="p-8">
      <h2 className="font-oswald font-medium text-2xl uppercase mb-8">
        Top Rated
      </h2>
      <div className="grid grid-flow-col auto-cols-[64%] gap-5 overflow-x-auto overscroll-x-contain">
        {/* <FontAwesomeIcon icon={faCircleArrowLeft} /> */}
        {Movies.map((movie) => (
          <div className="bg-black rounded">
            <a href="#">
              <img
                src={movie.backdrop_path}
                alt="Poster"
                className="rounded-t"
              />
            </a>
            <div className="px-4">
              <a className="inline-block font-medium mt-3 mb-1">
                {movie.title}
              </a>
              <p className="text-source text-xs line-clamp-4 text-gray-300">
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
