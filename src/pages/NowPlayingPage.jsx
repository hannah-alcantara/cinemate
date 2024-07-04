import MovieList from "../components/MovieList";

export function NowPlayingPage() {
  return (
    <div className='bg-white'>
      <MovieList endpoint='now_playing' />
    </div>
  );
}
