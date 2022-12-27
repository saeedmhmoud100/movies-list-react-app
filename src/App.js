import axios from "axios";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";

const API_KEY = "a277e16bf8ca84e2eb0ef98e9d176a7d";

function App() {
  const getAllMovies = async (_) => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log(movies.data);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <MoviesList />
      </Container>
    </div>
  );
}

export default App;
