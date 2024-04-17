import Movies from "../movies.json";

export function NewMoviesList() {
  return (
    <div className="bg-m-black text-white">
      <h1 className="text-center p-8 text-2xl font-medium">NOW PLAYING</h1>
      <ul className="grid grid-cols-3 striped">
        {Movies.map((movie) => {
          return (
            <div className="text-center">
              <img src={movie.poster_path} alt="Poster" className="p-6" />
              <p className="px-6 pb-6">{movie.title}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
