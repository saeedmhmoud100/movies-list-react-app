import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import ErrorNotFound from "./components/ErrorNotFound";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/movies-list-react-app/" element={<MoviesList />} />
          <Route
            path="/movies-list-react-app/movie/:id"
            element={<MovieDetails />}
          />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
