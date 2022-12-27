import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import ErrorNotFound from "./components/ErrorNotFound";

const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d"; //https://www.themoviedb.org/settings/api

function App() {
  const [MoviesData, setMoviesData] = useState([]);
  const [total_pages, settotal_pages] = useState(0);

  const getMovies = async (search_val) => {
    let movies = [];
    if (search_val === "" || search_val === undefined) {
      movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
    } else {
      movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_val}`
      );
    }
    settotal_pages(movies.data.total_pages);
    setMoviesData(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getPage = async (page) => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    setMoviesData(movies.data.results);
  };

  return (
    <div className="font color-body">
      <NavBar search={getMovies} />
      <Container>
        <Routes>
          <Route
            path="/movies-list-react-app/"
            element={
              <MoviesList
                MoviesData={MoviesData}
                getPage={getPage}
                total_pages={total_pages}
              />
            }
          />

          <Route
            path="/movies-list-react-app/movie/:id"
            element={<MovieDetails API_KEY={API_KEY} />}
          />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
