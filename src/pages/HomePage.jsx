import { Hero } from "../components/Hero";
import { NowPlayingList } from "../components/NowPlayingList";
import { PopularList } from "../components/PopularList";
import { TopRatedMoviesList } from "../components/TopRatedMoviesList";

export function HomePage() {
  return (
    <div>
      <Hero />
      <NowPlayingList />
      <PopularList />
      <TopRatedMoviesList />
    </div>
  );
}
