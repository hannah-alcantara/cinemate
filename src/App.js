import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Carousel } from "./components/Carousel";
import { NowPlayingMoviesList } from "./components/NowPlayingMoviesList";
import { PopularMoviesList } from "./components/PopularMoviesList";
import { TopRatedMoviesList } from "./components/TopRatedMoviesList";
import { Footer } from "./components/Footer";
import { UpcomingMoviesList } from "./components/UpcomingMoviesList";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <div>
      {/* <Navigation />
      <MovieDetail /> */}
      <Router>
        <Navigation />
        {/* <Carousel />
        <Routes>
          <Route path="/details" element={<MovieDetail />} />
          <Route path="/" element={<PopularMoviesList />} />
        </Routes>
        <NowPlayingMoviesList />
        <UpcomingMoviesList />
        <TopRatedMoviesList />
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
