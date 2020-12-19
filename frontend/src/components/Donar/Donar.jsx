import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import {updateUserWallet} from "../../../redux/action-creators/user-actions"
import patitas from "../../img/patitas.png";
import "./style.css";

const Donar = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const {loggedUser} = useSelector((state) => state.userReducer);

  const handleDonation = (e, tier) => {
    e.preventDefault();
    console.log('el tier en la funcion', tier)
    switch (tier) {
      case "silver":
            if (loggedUser.wallet - 200 >= 0) {
              dispatch(updateUserWallet(loggedUser.name, 'silver')).then(() => {
                return alert("Compra exitosa. Gracias por tu colaboracion!");
              });
            } else {
              return alert("No tienes suficiente dinero.");
            }
            break;
      case "gold":
            if (loggedUser.wallet - 500 >= 0) {
              dispatch(updateUserWallet(loggedUser.name, 'gold')).then(() => {
                return alert("Compra exitosa. Gracias por tu colaboracion!");
              });
            } else {
              return alert("No tienes suficiente dinero.");
            }
            break;
      default:
        "Compra incorrecta";
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="donar-container">
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-front silver-card">
              <h2>Patita de Plata</h2>
              <img className="silver" src={patitas}></img>
              <p className="flip-card-front-p">
                Ayuda a perritos desprotegidos y obtené esta insignia en tu
                perfil.
              </p>
              <span className="flip-card-front-span">Valor: $200</span>
              <button
                disabled={status}
                onClick={(e) => handleDonation(e, "silver")}
                className="flip-btn adoptar-btn"
              >
                COMPRAR
              </button>
            </div>
            <div className="flip-card-back">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
                <span>- Albert Einstein -</span>
              </p>
              <button className="flip-btn">flip</button>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-front silver-card">
              <h2>Patita de Oro</h2>
              <img className="gold" src={patitas}></img>
              <p className="flip-card-front-p">
                Ayuda a perritos desprotegidos y obtené esta insignia en tu
                perfil.
              </p>
              <span className="flip-card-front-span">Valor: $500</span>
              <button
                disabled={status}
                onClick={(e) => handleDonation(e, "gold")}
                className="flip-btn adoptar-btn"
              >
                COMPRAR
              </button>
            </div>
            <div className="flip-card-back">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
                <span>- Albert Einstein -</span>
              </p>
              <button className="flip-btn">flip</button>
            </div>
          </div>
        </div>
      </div>

      <div className="donaciones-recibidas">
        <h2>DONACIONES RECIBIDAS</h2>
      </div>

      <div className="list-container">
        <div className="list-inner-container"></div>
      </div>
      <Footer />
    </Fragment>
  );
};


export default Donar;
