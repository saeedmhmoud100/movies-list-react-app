import { ALLMOVIES, MOVIE_DETAIL, PAGIN } from "../types/moviesType";

const initialValue = { movies: [], movie: {}, pageCount: 0, page: 0 };

export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return {
        movies: action.movies,
        pages: action.pageCount,
        page: action.page,
        search_val: action.search_val,
        movie: {},
      };
    case PAGIN:
      return {
        movies: action.movies,
        pages: action.pageCount,
        page: action.page,
        search_val: state.search_val,
        movie: {},
      };
    case MOVIE_DETAIL:
      return {
        ...state,
        movie: action.movie,
      };

    default:
      return state;
  }
};
