import React from "react";
import { cardsImgUrl } from "../Utilits/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 wd:w-44 pr-4">
      <img src={cardsImgUrl + posterPath} alt="movie img" />
    </div>
  );
};

export default MovieCard;
