import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";

const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d";

function App() {
  const [MoviesData, setMoviesData] = useState([]);
  let movies = [];
  const getMovies = async (search_val) => {
    if (search_val === "" || search_val === undefined) {
      movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
    } else {
      movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a277e16bf8ca84e2eb0ef98e9d176a7d&language=en-US&page=1&include_adult=false&query=${search_val}`
      );
    }
    setMoviesData(movies.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={getMovies} />
      <Container>
        <MoviesList MoviesData={MoviesData} />
      </Container>
    </div>
  );
}

export default App;
