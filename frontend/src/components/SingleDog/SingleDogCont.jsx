import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SingleDog from "./SingleDog"
import "./style.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SingleDogCont = ({history, match}) => {

  return (
    <Fragment>
        <Navbar/>
        <SingleDog history={history} match={match}/>
        <Footer/>
    </Fragment>
  );
};

export default SingleDogCont;