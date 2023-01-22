export const ALLMOVIES = "ALLMOVIES";
export const PAGIN = "PAGIN";
export const MOVIE_DETAIL = "MOVIE_DETAIL";

export const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d"; //https://www.themoviedb.org/settings/api

export const allMoviesAPIURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const searchMoviesAPIURL = (word) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${word}`;

export const GETPAGE = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

export const GETPAGESEARCH = (page, search_val) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${search_val}`;

export const movieDetailURL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
