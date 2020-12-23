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
      <div className="about-section">
            <div className="inner-container">
                  <h1>Sobre Nosotros</h1>
                  <p className="about-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos commodi amet beatae magnam incidunt non odio velit modi possimus. Laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto at labore sit quaerat aspernatur corporis unde accusamus vero nihil praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dicta nam veritatis magnam, nobis dolore molestias illum consequatur vitae suscipit.
                  </p>
                  <div className="skills">
                       <span>Rescate</span>
                       <span>Maltrato Animal</span>
                       <span>Apadrinamiento</span>
                  </div>
            </div>
      </div>
      
      <Footer/>
    </Fragment>
  );
};

export default About;