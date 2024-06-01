import { MovieDetail } from "../components/MovieDetail";
import Navigation from "../components/Navigation";
import { MovieSimilar } from "../components/MovieSimilar";
import { Footer } from "../components/Footer";

export function DetailsPage() {
  return (
    <div>
      <MovieDetail />
      <MovieSimilar />
      <Footer />
    </div>
  );
}
