import axios from "axios";
import {
  ALLMOVIES,
  allMoviesAPIURL,
  moviesSaerchAPIURL,
  MOVIESSEARCH,
} from "../types/moviesType";

export const getAllMovies = (_) => {
  return async (dispatch) => {
    const res = await axios.get(allMoviesAPIURL);
    dispatch({
      type: ALLMOVIES,
      movies: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

export const getMoviesSearch = (word) => {
  return async (dispatch) => {
    let res = await axios.get(moviesSaerchAPIURL(word));
    dispatch({
      type: MOVIESSEARCH,
      movies: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
