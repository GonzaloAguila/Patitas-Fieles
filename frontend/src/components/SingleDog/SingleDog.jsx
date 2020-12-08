import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"

const SingleDog = (props) => {
  console.log(props)

  return (
    <Fragment>
      <section className="single-dog-main">
        <h3>Volver</h3>
        <div className="single-dog-container">
          <div className="single-dog-img-cont">
            <img src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900" className="single-dog-img" alt=""/>
          </div>
          <div className="single-dog-text-cont">
          <h2>Gregorio</h2>
          <span><strong>Edad: </strong></span><p>1 año</p>
          <span><strong>Género: </strong></span><p>Macho</p>
          <span><strong>Tamaño: </strong></span><p>Chico</p>
          <span><strong>Descripción: </strong></span><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, praesentium?</p>
          </div>
        </div>
        <div className="single-dog-bottom">
            <h3>¿Me adoptás?</h3>
            <h5>Dejanos tus datos y a la brevedad nos pondremos en contacto con vos
              para hablar un poco más sobre el proceso.
            </h5>
            <form action="">
              <span>Teléfono</span><input type="text" name="" id=""/>
              <span>Email</span><input type="text" name="" id=""/>
            </form>
          </div>
      </section>
    </Fragment>
  );
};

export default SingleDog