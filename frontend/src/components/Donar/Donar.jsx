import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import SvgComponent from "./SvgComponent";
import patitas from "../../img/patitas.png";
import "./style.css";

const Donar = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="donar-container">
        <div className="flip-card-container">

          <div className="flip-card">
            <div className="flip-card-front silver-card">
              <h2>Patita de Plata</h2>
              <img className="silver"
                src={patitas}
              ></img>
              <p className="flip-card-front-p">Ayuda a perritos desprotegidos y obtené esta insignia en tu perfil.</p>
              <span className="flip-card-front-span">Valor: $200</span>
              <button className="flip-btn adoptar-btn">Más info</button>
            </div>
            <div className="flip-card-back">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
                <span>- Albert Einstein -</span>
              </p>
              <button className="flip-btn">flip</button>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-front silver-card">
              <h2>Patita de Oro</h2>
              <img className="gold"
                src={patitas}
              ></img>
              <p className="flip-card-front-p">Ayuda a perritos desprotegidos y obtené esta insignia en tu perfil.</p>
              <span className="flip-card-front-span">Valor: $500</span>
              <button className="flip-btn adoptar-btn">Más info</button>
            </div>
            <div className="flip-card-back">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
                <span>- Albert Einstein -</span>
              </p>
              <button className="flip-btn">flip</button>
            </div>
          </div>

        </div>
      </div>

      <div className="donaciones-recibidas">
        <h2>DONACIONES RECIBIDAS</h2>
      </div>

      <div className="list-container">
        <div className="list-inner-container"></div>
      </div>
      <Footer />
    </Fragment>
  );
};

{
  /* <div className="donar-card-container">
        <div className="donar-card">
          <div className="donar-top">
            <h2 className="donar-title">PATITA DE BRONCE</h2>
            <img className="donar-img" src={patitas} alt=""/>
            <p></p>
            <button>DONAR $100</button>
          </div>  
        </div>
        <div className="donar-card"></div>
        <div className="donar-card"></div>
      </div> */
}

export default Donar;
