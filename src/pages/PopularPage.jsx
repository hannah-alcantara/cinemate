import MovieList from "../components/MovieList";
import Searchbar from "../components/Searchbar";

export function PopularPage() {
  return (
    <div>
      <section className=' bg-white'>
        <div className='p-8'>
          <h2 className='mb-8 flex items-center font-oswald font-medium text-2xl uppercase text-black'>
            Popular Films
          </h2>
          <Searchbar />
        </div>
        <MovieList />
      </section>
    </div>
  );
}
