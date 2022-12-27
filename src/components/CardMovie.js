import React from "react";
import { Col } from "react-bootstrap";

const CardMovie = ({ mov }) => {
  console.log(mov.poster_path);
  return mov.poster_path === null ? null : (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Name: {mov.original_title}</p>
              <p>Publish Date: {mov.release_date}</p>
              <p>Rater number: {mov.vote_count}</p>
              <p>Rate:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovie;
