import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"


const SingleDog = ({selectedDog, nextDog, loggedUser}) => {

  console.log(loggedUser, 'log user')

  return (
    <Fragment>
      {selectedDog ?  
      <section className="single-dog-main">
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
       <Link to={`/adoptar/${selectedDog.name}`}>
      <button className="hvr-grow-shadow nextbtn" onClick={(e) => nextDog(e,selectedDog.name)}><i class="fas fa-angle-right"></i></button>
      </Link>
      <div className="single-dog-bottom">
          <h3>¿Me adoptás?</h3>
          <h5>Dejanos tus datos y a la brevedad nos pondremos en contacto con vos
            para detallarte el proceso de adopción.
          </h5>
          {loggedUser.name ? <form className="single-dog-form" action="">
             <span>Teléfono</span><input type="text" name="" id=""/>
             <span>Email</span><input type="email" name="" id=""/>
             <button className="form-btn">Enviar</button>
           </form>
          : 
            <div className="not-logged">
                <h5>Debes estar logeado para solicitar una adopción.</h5>
               <Link to="/login" className="login">Log in</Link>
           </div>
          }
        </div>
    </section>
      : null}
    </Fragment>
  );
};

export default SingleDog