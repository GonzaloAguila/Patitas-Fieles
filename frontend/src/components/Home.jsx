import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Jumbo from "./Jumbo";
import Footer from "./Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Jumbo/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
