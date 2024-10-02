import Hero from "./Hero";
import HorizontalList from "./HorizontalList";
import PopularList from "./PopularList";
import TopRatedList from "./TopRatedList";

const HomePage = () => {
  return (
    <div className='bg-gray'>
      {/* <Hero /> */}
      <HorizontalList endpoint='now_playing' />
      {/* <PopularList endpoint='popular' />
      <TopRatedList endpoint='top_rated' /> */}
    </div>
  );
};

export default HomePage;
