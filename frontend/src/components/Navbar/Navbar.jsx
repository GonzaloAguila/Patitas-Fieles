import { Link } from "react-router-dom";
import "./style.css"
import React, { Fragment, useEffect, useState } from "react";
import {checkUserStatus, logoutUser} from "../../../redux/action-creators/user-actions"
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  const dispatch = useDispatch()
  const {user, loggedUser} = useSelector((state) => state.userReducer)

  const logoutHandler = () => {
    dispatch(logoutUser()).then(() => {
      alert("Gracias por tu visita!")
    })
  }

  useEffect(() => {
    dispatch(checkUserStatus()).then(() => {
    })
  }, [])

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
          {
          loggedUser.name ? 
          <div className="welcome-container">
            <div className="wallet-container">
              <li className="welcome">¡Bienvenid@!</li>
              <li className="welcome-wallet">Tu Billetera: <span className="wallet">${loggedUser.wallet}</span></li>
            </div>
            <i onClick={logoutHandler} class="fas fa-power-off logout"></i>
          </div>
           :
           <li>
           <Link to="/login" className="login">Log in</Link>
           <Link to="/register" className="login">Registrarse</Link>
           </li>
           }
      </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;