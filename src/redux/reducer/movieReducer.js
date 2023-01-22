import { ALLMOVIES, MOVIESSEARCH } from "../types/moviesType";

const initialValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.movies, pageCount: action.pageCount };
    case MOVIESSEARCH:
      return { movies: action.movies, pageCount: action.pageCount };
    default:
      return state;
  }
};
