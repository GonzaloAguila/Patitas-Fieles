import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Navbar = () => {
  return (
    <Fragment>
      <div className="navcontainer">
        <div className="nav-block logo logo-content">
          PATITAS FIELES
        </div>
        <ul className="nav-block items">
          <li className="item"><i className="fas fa-dog"></i>Quienes Somos</li>
          <li className="item"><i className="fas fa-dog"></i>Adoptar</li>
          <li className="item"><i className="fas fa-dog"></i>Donar</li>
          <li className="item"><i className="fas fa-dog"></i>Denuncias</li>
        </ul>
      <ul className="nav-block log">
          <button className="login">Log in</button>
          <button className="login">Registrarse</button>
      </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;