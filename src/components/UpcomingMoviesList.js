import Movies from "../movies.json";

export function UpcomingMoviesList() {
  return (
    <div className="bg-black p-8">
      <h2 className="font-oswald font-medium text-2xl mb-8 uppercase">
        Coming Soon
      </h2>
      <div className="grid grid-flow-col auto-cols-[76%] gap-5 overflow-x-auto overscroll-x-contain">
        {Movies.map((movie) => {
          return (
            <div className="relative overflow-hidden">
              <div className="group relative m-0 flex">
                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-85 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                  <a href="">
                    <img
                      src={movie.backdrop_path}
                      alt="Poster"
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              </div>
              <div className="text-center mt-6">
                <a className="font-serif text-2xl font-bold">{movie.title}</a>
                <h2 className="text-sm font-light text-gray-200 font-courier">
                  In Cinemas June 6
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
