import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function MovieDetails({ API_KEY }) {
  const params = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetails = async (id) => {
    const m = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    setMovie(m.data);
  };

  useEffect(() => {
    getMovieDetails(params.id);
  }, []);

  return (
    <div className="pb-3">
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                Movie Name: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                Movie Date: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                Rating count: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Rate: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">Description:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/movies-list-react-app/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              Home Page
            </button>
          </Link>
          <a href={movie.homepage} target="_blank" rel="noreferrer">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              Watch the movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
