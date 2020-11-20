import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, Carousel, Row, Container, Card, CardGroup } from "react-bootstrap";
import "bootswatch/dist/materia/bootstrap.min.css";

const Home = () => {
  return (
    <Container>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
      </Container>
    </Container>
  );
};

export default Home;
