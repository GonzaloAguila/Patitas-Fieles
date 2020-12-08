import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchDog} from "../../../redux/action-creators/dog-actions";
import { Link } from "react-router-dom";
import "./style.css"


const SingleDog = ({match, history}) => {

const dispatch = useDispatch();
const { selectedDog } = useSelector((state) => state.dogsReducer);

useEffect(() => {
  dispatch(fetchDog(match.params.dogname))
}, []);

  return (
    <Fragment>
      {selectedDog ?  
      <section className="single-dog-main">
      {/* <h3 className="volver"><Link to="/adoptar">Volver</Link></h3> */}
      <div className="single-dog-container">
        <div className="single-dog-img-cont">
          <img src={selectedDog.img} className="single-dog-img" alt=""/>
        </div>
        <div className="single-dog-text-cont">
        <h2>{selectedDog.name}{selectedDog.gender == "macho" ? <i class="fas fa-mars title-m"></i> : <i class="fas fa-venus title-f"></i>}</h2>
        <div className="single-dog-text">
        <span><strong>Edad: </strong>{selectedDog.age}</span>
        <span><strong>Género: </strong>{selectedDog.gender}</span>
        <span><strong>Tamaño: </strong>{selectedDog.size}</span> 
        <span><strong>Descripción: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, praesentium?</span>
        </div>
        </div>
      </div>
      <div className="single-dog-bottom">
          <h3>¿Me adoptás?</h3>
          <h5>Dejanos tus datos y a la brevedad nos pondremos en contacto con vos
            para detallarte el proceso de adopción.
          </h5>
          <form className="single-dog-form" action="">
            <span>Teléfono</span><input type="text" name="" id=""/>
            <span>Email</span><input type="email" name="" id=""/>
          </form>
          <button className="form-btn">Enviar</button>
        </div>
    </section>
      : null}
    </Fragment>
  );
};

export default SingleDog