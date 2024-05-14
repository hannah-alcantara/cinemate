import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import MovieGrid from "../components/MovieGrid";

export function PopularPage() {
  return (
    <div>
      <section className='p-8 bg-white'>
        <h2 className='flex items-center font-oswald font-medium text-2xl uppercase text-black'>
          Popular Films
        </h2>
        {/* Search bar */}
        <div className='relative mt-6 mb-12'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <i className='fa fa-magnifying-glass fa-text-gray-400 text-sm' />
          </div>
          <input
            type='text'
            placeholder='Find a Film'
            className='h-14 w-full p-4 ps-10 text-md font-courier text-gray-900 border border-gray-300 rounded-lg shadow-2xl focus:outline-none'
            required
          />
          <button
            type='submit'
            className='absolute end-2.5 bottom-2.5 bg-black font-medium rounded-md text-sm px-4 py-2 hover: hover:bg-m-grey'
          >
            Search
          </button>
        </div>
        <MovieGrid />
      </section>
      <Footer />
    </div>
  );
}
