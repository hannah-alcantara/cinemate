import MovieList from "../components/MovieList";
import Title from "../components/Title";

export function ListsPage() {
  return (
    <div>
      <Title to='/watchlist' text='Watchlist' />
      <MovieList />
    </div>
  );
}
