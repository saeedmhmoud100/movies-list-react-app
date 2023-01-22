import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";
import CardMovie from "./CardMovie";
import MyPagination from "./MyPagination";

function MoviesList({ getPage, total_pages }) {
  const [MoviesData, setMoviesData] = useState([]);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getAllMovies());
  }, []);

  const MoviesDatas = useSelector((state) => state.movies);

  useEffect(() => {
    setMoviesData(MoviesDatas);
  }, [MoviesDatas]);

  
  return (
    <Row className="mt-3">
      {MoviesData.length > 0 ? (
        MoviesData.map((mov) => <CardMovie key={mov.id} mov={mov} />)
      ) : (
        <h2 className="text-center mt-4">there are no movies...</h2>
      )}
      {MoviesData.length > 0 ? (
        <MyPagination getPage={getPage} total_pages={total_pages} />
      ) : null}
    </Row>
  );
}

export default MoviesList;
