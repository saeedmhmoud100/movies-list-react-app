import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import MyPagination from "./components/MyPagination";
import NavBar from "./components/NavBar";

const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d";

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
        `https://api.themoviedb.org/3/search/movie?api_key=a277e16bf8ca84e2eb0ef98e9d176a7d&language=en-US&page=1&include_adult=false&query=${search_val}`
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
        <MoviesList
          MoviesData={MoviesData}
          getPage={getPage}
          total_pages={total_pages}
        />
      </Container>
    </div>
  );
}

export default App;
