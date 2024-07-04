import MovieList from "../components/MovieList";

export function TopRatedPage() {
  return (
    <div className='bg-white'>
      <MovieList endpoint='top_rated' />
    </div>
  );
}
