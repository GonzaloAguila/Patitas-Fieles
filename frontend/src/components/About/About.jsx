import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import abouticon from "../../img/abouticon.png"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./style.css"

const About = () => {
  return (
    <Fragment>
      <Navbar/>
      <div className="about-container">
          <div className="about-left">
              <div className="about-img-container">
             <img className="about-img" src={abouticon} alt=""/>
             </div>
          </div>
          <div className="about-right">
            <h1 className="about-title">Sobre Nosotros</h1>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum officiis odio aut enim. Aliquid nobis expedita, necessitatibus, et, repellendus aliquam debitis a beatae hic repellat dolorem! Blanditiis, maxime! Ipsa, hic?
            Sint libero architecto fuga provident porro facilis vero maiores adipisci, in corrupti. Vitae fuga accusantium fugiat!
            </p>
          </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default About;