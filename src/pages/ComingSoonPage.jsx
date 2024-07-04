import MovieList from "../components/MovieList";

export function ComingSoonPage() {
  return (
    <div className='bg-white'>
      <MovieList endpoint='upcoming' />
    </div>
  );
}
