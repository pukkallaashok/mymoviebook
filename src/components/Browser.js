import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlaying from "../Hooks/useNowPlaying";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browser = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Browser;
