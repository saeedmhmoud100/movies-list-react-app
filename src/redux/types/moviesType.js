export const ALLMOVIES = "ALLMOVIES";
export const MOVIESSEARCH = "moviesSearch";
export const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d"; //https://www.themoviedb.org/settings/api
export const allMoviesAPIURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const moviesSaerchAPIURL = (word) =>
  word != ""
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${word}`
    : allMoviesAPIURL;
