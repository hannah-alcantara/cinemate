import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";

export function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );

  {
    /* <Navigation />
<Carousel />
<Routes>
  <Route path="/details" element={<MovieDetail />} />
  <Route path="/" element={<PopularMoviesList />} />
</Routes>
<NowPlayingMoviesList />
<UpcomingMoviesList />
<TopRatedMoviesList />
<Footer /> */
  }
}
