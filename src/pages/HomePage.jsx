import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { NowPlayingList } from "../components/NowPlayingList";
import { PopularList } from "../components/PopularList";
import { ComingSoonList } from "../components/ComingSoonList";
import { TopRatedMoviesList } from "../components/TopRatedMoviesList";
import { Footer } from "../components/Footer";
export function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <NowPlayingList />
      <ComingSoonList />
      <PopularList />
      <TopRatedMoviesList />
      <Footer />
    </div>
  );
}
