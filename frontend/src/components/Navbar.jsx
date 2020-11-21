import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navcontainer">
        <ul className="elul">
          <li className="login">Log in</li>
          <li className="login">Registrarse</li>
          <li><i class="fas fa-dog"></i>Quienes Somos</li>
          <li><i class="fas fa-dog"></i>Adoptar</li>
          <li><i class="fas fa-dog"></i>Donar</li>
          <li><i class="fas fa-dog"></i>Denuncias</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;