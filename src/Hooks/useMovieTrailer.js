import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utilits/moviesSlice";
import { useEffect } from "react";
import { API_Options } from "../Utilits/constants";

const useMovietrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    console.log(json);

    const fetchTrailer = json.results.filter(
      (video) => (video.type = "Trailer")
    );
    const Trailer = fetchTrailer.length ? fetchTrailer[8] : json.results[0];

    console.log(Trailer);

    dispatch(addMovieTrailer(Trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovietrailer;
