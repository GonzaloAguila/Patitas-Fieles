import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar'

const Jumbo = () => {
  return (
    <Fragment>
      <div className="hero">
      <div className="hero-text">
        <h1 className="title">¡Bienvenido a Patitas Fieles!</h1>
        <h3>Somos una fundación que da asilo a perros callejeros.</h3>
        <button className="myButton"><i className="fas fa-paw"></i>Quiero Adoptar</button>
     </div>
    </div>
    </Fragment>
  );
};

export default Jumbo;