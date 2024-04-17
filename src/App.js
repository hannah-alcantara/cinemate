import "./App.css";
import { Navigation } from "./components/Navigation";
import { Carousel } from "./components/Carousel";
import { NewMoviesList } from "./components/NewMoviesList";
import { PopularMoviesList } from "./components/PopularMoviesList";
import TopRatedMoviesList from "./components/TopRatedMoviesList";

function App() {
  return (
    <div>
      <Navigation />
      <Carousel />
      <PopularMoviesList />
      <PopularMoviesList />
    </div>
  );
}

export default App;
