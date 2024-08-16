import MovieDetail from "./MovieDetail";
import SimilarList from "../../components/SimilarList";

const DetailsPage = () => {
  return (
    <div>
      <MovieDetail />
      <SimilarList endpoint='popular' />
    </div>
  );
};

export default DetailsPage;
