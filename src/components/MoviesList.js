import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";

function MoviesList({ MoviesData }) {
  return (
    <Row className="mt-3">
      {MoviesData.length > 0 ? (
        MoviesData.map((mov) => <CardMovie key={mov.id} mov={mov} />)
      ) : (
        <h2 className="text-center mt-4">there are no movies...</h2>
      )}
    </Row>
  );
}

export default MoviesList;
