import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Navbar = () => {
  return (
    <Fragment>
      <div className="navcontainer">
        <div className="nav-block logo logo-content">
          <Link to="/">PATITAS FIELES</Link> 
        </div>
        <ul className="nav-block items">
          <li  className="item"><i className="fas fa-dog"></i><Link to="/about">Quienes Somos</Link></li>
          <li className="item"><i className="fas fa-dog"></i><Link to="/adoptar">Adoptar</Link></li>
          <li className="item"><i className="fas fa-dog"></i><Link to="/donar">Donar</Link></li>
          <li className="item"><i className="fas fa-dog"></i><Link to="/denuncias">Denuncias</Link></li>
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