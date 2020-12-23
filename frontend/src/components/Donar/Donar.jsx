import React, { Fragment, useEffect, useState } from "react";
import { fetchDonations } from '../../../redux/action-creators/donations-actions'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { updateUserWallet } from "../../../redux/action-creators/user-actions"
import patitas from "../../img/patitas.png";
import "./style.css";

const Donar = () => {
  const dispatch = useDispatch();
  
  const { loggedUser } = useSelector((state) => state.userReducer);
  const { allDonations } = useSelector((state) => state.donationsReducer)


  useEffect(() => {
    dispatch(fetchDonations()).then(({ data }) => {
      console.log(data)
    })
  }, [])

  const handleDonation = (e, tier) => {
    e.preventDefault();
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
                disabled={loggedUser.name ? false : true}
                onClick={(e) => handleDonation(e, "silver")}
                className={loggedUser.name ? "flip-btn adoptar-btn" : "flip-btn disabled"}
              >
                COMPRAR
              </button>
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
                disabled={loggedUser.name ? false : true}
                onClick={(e) => handleDonation(e, "gold")}
                className={loggedUser.name ? "flip-btn adoptar-btn" : "flip-btn disabled"}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="donaciones-recibidas">
        <h2>Colaboraciones Anteriores:</h2>
      </div>

      <div className="list-container">
        <div className="list-inner-container">
          {allDonations.length > 0 ? allDonations.map((don) => {
            return <Fragment>
              {don.type == 'gold' ?
                <div className='donation-c'>
                  <h5>Patita de Oro</h5>
                  <img className="donation-img-gold" src={patitas}></img>
                  <span className='donation-span'><strong>Colaborador:</strong></span> <p className="donator">{don.name}</p>
                </div>
                :
                <div className='donation-c'>
                  <h5>Patita de Plata</h5>
                  <img className="donation-img-silver" src={patitas}></img>
                  <span className='donation-span'><strong>Colaborador:</strong></span> <p className="donator">{don.name}</p>
                </div>
              }
            </Fragment>
          }) : <p>Todavia no realizaste ninguna donacion.</p>}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};


export default Donar;
