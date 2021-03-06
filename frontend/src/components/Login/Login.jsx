import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser} from "../../../redux/action-creators/user-actions";
import "./style.css"

const Login = ({history}) => {

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
      name: "",
      password: "",
    });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      e.preventDefault()
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };  

  const handleSubmit = (e,loggedUser) => {
      e.preventDefault()
      setLoading(true)
      dispatch(fetchUser(loggedUser))
      .then(() => {
        setTimeout(() => {
          setInputs({name : "", password: ""});  
          setLoading(false)
          history.push("/adoptar")

        },1000)
      })
  }

  return (
    <Fragment>
     <div className="box">
       <div className="imgBx">
        <img src="https://images.pexels.com/photos/3790942/pexels-photo-3790942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
       </div>
       <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form onSubmit={(e)=> handleSubmit(e,inputs)} action="">
            <div className="inputBx">
              <span>Usuario</span>
              <input onChange={handleChange} type="text" name="name" required/>
            </div>
            <div className="inputBx">
              <span>Contraseña</span>
              <input onChange={handleChange} type="password" name="password" required/>
            </div>
            <div className="remember">
              <label><input type="checkbox" name=""/>Recordarme</label>
            </div>
            <div className="inputBx">
              <input type="submit" value="Ingresar"/>
            </div>
            <div className="inputBx">
              <p>¿No tenés una cuenta? <Link to="/register">Registrarse</Link></p> 
            </div>
          </form>
          {loading ? <h3>CARGANDO...</h3>
           :
           <div>
            <h3>Logearse con:</h3>
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

export default Login;