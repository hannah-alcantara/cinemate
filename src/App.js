import "./App.css";
import { Navigation } from "./components/Navigation";
import { Carousel } from "./components/Carousel";
import { NowPlayingMoviesList } from "./components/NowPlayingMoviesList";
import { PopularMoviesList } from "./components/PopularMoviesList";
import { TopRatedMoviesList } from "./components/TopRatedMoviesList";
import { Footer } from "./components/Footer";
import { UpcomingMoviesList } from "./components/UpcomingMoviesList";

function App() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <PopularMoviesList />
      <TopRatedMoviesList />
      <NowPlayingMoviesList />
      <UpcomingMoviesList />
      <Footer />
    </div>
  );
}

export default App;
