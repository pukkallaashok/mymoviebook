import { useEffect } from "react";
import { API_Options } from "../Utilits/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utilits/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopular;
