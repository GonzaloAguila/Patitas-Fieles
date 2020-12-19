import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser,createUser} from "../../../redux/action-creators/user-actions";
import "./style.css"

const Register = ({history}) => {

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: "",
    });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      e.preventDefault()
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };  

  const handleSubmit = (e,user) => {
      e.preventDefault()
      setLoading(true)
      localStorage.clear()
      dispatch(createUser(user)).then(() => {
        setTimeout(() => {
          setLoading(false)
          history.push("/login")
        }, 5000)
      })}

  return (
    <Fragment>
     <div className="box">
       <div className="imgBx">
        <img src="https://images.pexels.com/photos/1149826/pexels-photo-1149826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
       </div>
       <div className="contentBx">
        <div className="formBx">
          <h2>Registrarse</h2>
          <form onSubmit={(e)=>handleSubmit(e,inputs)}>
          <div className="inputBx">
              <span>Email</span>
              <input onChange={handleChange} type="email" name="email" required/>
            </div>
            <div className="inputBx">
              <span>Usuario</span>
              <input onChange={handleChange} type="text" name="name" required/>
            </div>
            <div className="inputBx">
              <span>Contraseña</span>
              <input onChange={handleChange} type="password" name="password" required/>
            </div>
            <div className="remember">
              <label><input type="checkbox" name="" required/> Acepto términos y condiciones.</label>
            </div>
            <div className="inputBx">
              <input type="submit" value="Crear Cuenta"/>
            </div>
            <div className="inputBx">
              <p>¿Ya tenés cuenta? <Link to="/login">Logearse</Link></p> 
            </div>
          </form>
          {loading ? <h3>CARGANDO...</h3>
           :
           <div>
            <h3>Registrarse con:</h3>
            <ul className="sci">
              <li></li>
              <li></li>
           </ul>
           </div>
          }
        </div>
       </div>
     </div>
     <Footer></Footer>
    </Fragment>
  );
};

export default Register;