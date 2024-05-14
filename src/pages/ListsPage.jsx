import MovieGrid from "../components/MovieGrid";
import Title from "../components/Title";

export function ListsPage() {
  return (
    <div>
      <Title to='/watchlist' text='Watchlist' />
      <MovieGrid />
    </div>
  );
}
