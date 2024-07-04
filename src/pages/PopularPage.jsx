import MovieList from "../components/MovieList";

export function PopularPage() {
  return (
    <div className='bg-white'>
      <MovieList endpoint='popular' />
    </div>
  );
}
