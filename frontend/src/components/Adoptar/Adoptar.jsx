import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchDogs} from "../../../redux/action-creators/dog-actions";
import { Link } from "react-router-dom";
import "./style.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Adoptar = () => {

const [loading, setLoading] = useState(true)

const dispatch = useDispatch();
const { dogs } = useSelector((state) => state.dogsReducer); 

useEffect(() => {
   if(loading){
   dispatch(fetchDogs())
   .then(() => setTimeout(() => {
    setLoading(false)
  }, 1000))
  }
});

  return (
    <Fragment>
      <Navbar/>
      <div className="adoptar-container">
        <div className="adoptar-sidebar">
          <div className="sidebar-form-container">
            <h2 className="sidebar-title">Buscar:</h2>
            <form className="sidebar-form" action="">
              <input placeholder="insertar nombre.." className="sidebar-input" type="text" name="" id=""/>
            </form>
          </div>
          <div className="sidebar-filter-container">
            <h2 className="sidebar-title">Filtrar por:</h2>
            <div className="sidebar-filters">
              <button class="button button-1">Machos <i class="fas fa-mars title-m"></i></button>
              <button class="button button-2">Hembras <i class="fas fa-venus title-f"></i></button>
              <button class="button button-3">Cachorros</button>
              <button class="button button-4">Adultos</button>
            </div>
          </div>
        </div>
        <div className="adoptar-card-container">
          {loading ? <p>Cargando..</p> :  
          dogs && dogs.map((dog) => {
            return <div key={dog.id} className="adoptar-single-card">
                     <h3 className="adoptar-single-card-title">{dog.name}{dog.gender == "macho" ? <i class="fas fa-mars title-m"></i> : <i class="fas fa-venus title-f"></i>}</h3>
                      <img className="adoptar-img" src={dog.img}alt=""/>
                      <Link className="adoptar-btn" to={`/adoptar/${dog.name}`}>Ver Más</Link>
                      </div>
              })}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Adoptar;