import React from "react";
import { Col } from "react-bootstrap";
const CardMovie = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div>
        <div className="card">
          <img src="man.jpeg" className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Name/: Move</p>
              <p>Publish Date: 20/7/2022</p>
              <p>Rating number: 50</p>
              <p>Rate: </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovie;
