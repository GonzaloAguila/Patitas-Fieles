import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import "./style.css"

const Login = () => {
  return (
    <Fragment>
     <div className="box">
       <div className="imgBx">
        <img src="https://images.pexels.com/photos/3790942/pexels-photo-3790942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
       </div>
       <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form action="">
            <div className="inputBx">
              <span>Usuario</span>
              <input type="text"/>
            </div>
            <div className="inputBx">
              <span>Contraseña</span>
              <input type="password"/>
            </div>
            <div className="remember">
              <label><input type="checkbox" name=""/>Recordarme</label>
            </div>
            <div className="inputBx">
              <input type="submit" value="Ingresar"/>
            </div>
            <div className="inputBx">
              <p>¿No tenés una cuenta? <a href="">Registrarse</a></p> 
            </div>
          </form>
          <h3>Logearse con:</h3>
          <ul className="sci">
            <li></li>
            <li></li>
          </ul>
        </div>
       </div>
     </div>
     <Footer></Footer>
    </Fragment>
  );
};

export default Login;