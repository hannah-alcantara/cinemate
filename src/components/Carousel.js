import Movies from "../movies.json";

export function Carousel() {
  return (
    <div className="relative grid grid-cols-3 gap-3 m-4 pb-4">
      {Movies.map((movie) => {
        return (
          <div>
            <img
              src={movie.backdrop_path}
              alt="Backdrop"
              className="grayscale hover:grayscale-0 duration-500"
            />
          </div>
        );
      })}
      <span className="bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-courier text-white font-bold whitespace-nowrap p-2 text-sm">
          {/* Where every frame tells a story. */}
          Your Personal Collection of Cinematic Masterpieces.
        </h1>
      </span>
    </div>
  );
}

//SEARCH BAR
{
  /* <div className="text-gray-600 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <input type="text" placeholder="search" className=" bg-white h-6 p-2" />
  <button type="submit" className="absolute top-2 right-0">
    <FontAwesomeIcon icon={faMagnifyingGlass} /> 
  </button>
</div>; */
}
