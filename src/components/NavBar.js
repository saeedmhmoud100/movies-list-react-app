import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import search_icon from "../images/search_icon.svg";
import { getAllMovies } from "../redux/actions/movieAction";
const NavBar = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getAllMovies());
    document.getElementById("input").value = "";
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <Link to="/movies-list-react-app/" onClick={(_) => onClick()}>
              <img className="logo" src={"." + logo} alt="dfs" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <img
                src={"." + search_icon}
                className="fa-search"
                style={{ width: "17px" }}
                alt="search_logo"
              ></img>
              <input
                type="text"
                id="input"
                className="form-control"
                placeholder="Search"
                onChange={(e) => dispatch(getAllMovies(e.target.value))}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
