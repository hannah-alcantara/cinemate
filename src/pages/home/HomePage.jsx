import { useState, useEffect } from "react";
import { Hero } from "../../components/Hero";
import HorizontalList from "./HorizontalList";
import PopularList from "./PopularList";
import { TopRatedList } from "./TopRatedList";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HorizontalList endpoint='now_playing' />
      <PopularList endpoint='popular' />
      <TopRatedList />
    </div>
  );
};

export default HomePage;
