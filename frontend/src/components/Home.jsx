import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import Jumbo from "./Jumbo/Jumbo";
import Navbar from "./Navbar/Navbar";

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
