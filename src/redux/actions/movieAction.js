import axios from "axios";
import {
  ALLMOVIES,
  allMoviesAPIURL,
  GETPAGE,
  GETPAGESEARCH,
  movieDetailURL,
  MOVIE_DETAIL,
  PAGIN,
  searchMoviesAPIURL,
} from "../types/moviesType";

export const getAllMovies = (search_val) => {
  return async (dispatch) => {
    let res = [];
    if (search_val === "" || search_val === undefined) {
      res = await axios.get(allMoviesAPIURL);
    } else {
      res = await axios.get(searchMoviesAPIURL(search_val));
    }
    dispatch({
      type: ALLMOVIES,
      movies: res.data.results,
      page: res.data.page,
      pageCount: res.data.total_pages,
      search_val: search_val,
    });
  };
};

export const getPage = (page, pages, search_val) => {
  return async (dispatch) => {
    let res;
    if (search_val === "" || search_val === undefined) {
      res = await axios.get(GETPAGE(page));
    } else {
      res = await axios.get(GETPAGESEARCH(page, search_val));
    }
    dispatch({
      type: PAGIN,
      movies: res.data.results,
      pageCount: pages,
      page: res.data.page,
    });
  };
};

export const getMovieDetail = (id) => {
  return async (dispatch) => {
    const res = await axios.get(movieDetailURL(id));
    dispatch({
      type: MOVIE_DETAIL,
      movie: res.data,
    });
  };
};
