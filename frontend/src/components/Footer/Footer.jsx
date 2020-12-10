import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import patitas from "../../img/patitas.png"
import "./style.css"

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-content">
        <div className="col1">
          <div className="col1-title"><h3>PATITAS FIELES</h3></div>
          <div className="footer-img-cont">
          <img className="footer-img" src={patitas} alt=""/>
          </div>
        </div>
        <div className="col2">
          <div className="col2-title"><h3>Links Rápidos</h3></div>
          <ul>
            <li className="hvr-grow-shadow"><Link to="/"><i className="fas fa-dog"></i> Home</Link></li>
            <li className="hvr-grow-shadow"><Link to="/about"><i className="fas fa-dog"></i> Sobre Nosotros</Link></li>
            <li className="hvr-grow-shadow"><Link to="/adoptar"><i className="fas fa-dog"></i> Adoptar</Link></li>
            <li className="hvr-grow-shadow"><Link to="/donar"><i className="fas fa-dog"></i>Donar</Link></li>
          </ul>
        </div>
        <div className="col3">
          <div className="col3-title"><h3>Contacto</h3></div>
          <ul className="col3-contacto-cont">
            <div className="col3-contacto">
            <li><i class="fas fa-phone"></i> +54 351 6621801</li>
            <li><i class="fas fa-map-marker-alt"></i> Córdoba, Córdoba, Argentina.</li>
            <li><i class="fas fa-envelope"></i> aguilagonzalo1@gmail.com</li>
            </div>
            <ul className="col3-social">
              <li className="hvr-buzz-out"><a href="https://www.linkedin.com/in/gonzaloaguila/"><i class="fab fa-linkedin"></i></a></li>
              <li className="hvr-buzz-out"><a href="https://github.com/GonzaloAguila"><i class="fab fa-github"></i></a></li>
              <li className="hvr-buzz-out"><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </ul>
        </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Patitas Fieles | 2020 | Todos los derechos reservados.</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;