import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const NavBar = ({ search }) => {
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src="logo.png" alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <img
                src="search_icon.svg"
                className="fa-search"
                style={{ width: "17px" }}
                alt="search_logo"
              ></img>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => search(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
