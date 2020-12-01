import React, { Fragment } from "react";
import Navbar from './Navbar'
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import About from "./About";
import Adoptar from "./Adoptar";


const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Jumbo/>
      <About/>
      <Adoptar/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
