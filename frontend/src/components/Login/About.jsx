import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Login = () => {
  return (
    <Fragment>
     <div className="box">
       <div className="imgBx">
        <img src="https://images.pexels.com/photos/3671283/pexels-photo-3671283.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
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
              <input type="submit" value="Sign in"/>
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
    </Fragment>
  );
};

export default Login;