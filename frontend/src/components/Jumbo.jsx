import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SvgComponent from "./SvgComponent"
import bulldog from "../img/bulldog.png"
const Jumbo = () => {
  return (
     <div className="jumbo-container">
       <SvgComponent className="jumbo-svg"/>
      <div className="jumbo">
        <div className="jumbo-left">
          <div className="jumbo-img">
            <img className="bulldog" src={bulldog} alt=""/>
          </div>
        </div>
        <div className="jumbo-right">
        <p className="jumbo-right-title">¡Bienvenid@!</p>
        <p className="jumbo-right-text">Somos una organización sin fines de lucro que facilita el proceso de adopción de perritos callajeros.</p>
        <div className="jumbo-right-btn-container">
        <button className="jumbo-right-btn">ADOPTAR</button>
        </div>
        </div>
     </div>
     </div>
  );
};

export default Jumbo;