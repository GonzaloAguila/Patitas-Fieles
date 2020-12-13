import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchDogs,fetchFemaleDogs,fetchMaleDogs,fetchOneDog} from "../../../redux/action-creators/dog-actions";
import { Link } from "react-router-dom";
import "./style.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";

const Adoptar = () => {

const [loading, setLoading] = useState(true)
const [input, setInput] = useState("")
const [currentPage, setCurrentPage] = useState([1])//para hacer la pagination
const [dogsPerPage] = useState([6])//cuantos perros muestro por pagina

const dispatch = useDispatch();
const { dogs } = useSelector((state) => state.dogsReducer); 

//didMount
useEffect(() => {
   if(loading){
   dispatch(fetchDogs())
   .then(() => setTimeout(() => {
    setLoading(false)
  }, 1000))
  }
}, []);

const filtrarHembras = (e) => {
  e.preventDefault()
  setLoading(true)
  dispatch(fetchFemaleDogs()).then(() => setTimeout(() => {
    setLoading(false)
  }, 1000))
}

const filtrarMachos = (e) => {
  e.preventDefault()
  setLoading(true)
  dispatch(fetchMaleDogs()).then(() => setTimeout(() => {
    setLoading(false)
  }, 1000))
}

const handleChange = (e) => {
  setInput(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)
  dispatch(fetchOneDog(input)).then(() => setTimeout(() => {
    setLoading(false)
    setInput("")
  }, 1000))
}

const traerTodos = (e) => {
  e.preventDefault()
  setLoading(true)
  dispatch(fetchDogs())
  .then(() => setTimeout(() => {
   setLoading(false)
   }, 1000))
}

// LOGICA DEL PAGINATION
const indexOfLastDog = currentPage * dogsPerPage
const indexOfFirstDog = indexOfLastDog - dogsPerPage
const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog)
const paginate = (pageNumber) => setCurrentPage(pageNumber)
//

  return (
    <Fragment>
      <Navbar/>
      <div className="adoptar-container">
        <div className="adoptar-sidebar">
          <div className="sidebar-form-container">
            <h2 className="sidebar-title">Buscar:</h2>
            <div className="form-cont">
            <form onSubmit={(e) => handleSubmit(e)}className="sidebar-form" action="">
              <input  value={input} onChange={(e) =>handleChange(e)} placeholder="insertar nombre.." className="sidebar-input" type="text" name="" id=""/>
              <button disabled={input ? false : true} type="submit" className="sidebar-btn">Buscar</button>
            </form>
            </div>
          </div>
          <div className="sidebar-filter-container">
            <h2 className="sidebar-title">Filtrar por:</h2>
            <div className="sidebar-filters">
              <button class="button button-3" onClick={(e) => traerTodos(e)}>Mostrar Todos</button>
              <button class="button button-1" onClick={(e) => filtrarMachos(e)}>Machos <i class="fas fa-mars title-m"></i></button>
              <button class="button button-2" onClick={(e) => filtrarHembras(e)}>Hembras <i class="fas fa-venus title-f"></i></button>
              <button class="button button-3">Cachorros</button>
              <button class="button button-4">Adultos</button>
            </div>
          </div>
        </div>
        <div className="adoptar-card-container">
          {loading ? <div class="spinner-box">
                       <div class="circle-border">
                       <div class="circle-core"></div>
                      </div>  
                     </div> :  
          currentDogs[0].name ? currentDogs.map((dog) => {
            return <div key={dog.id} className="adoptar-single-card">
                     <h3 className="adoptar-single-card-title">{dog.name}{dog.gender == "macho" ? <i class="fas fa-mars title-m"></i> : <i class="fas fa-venus title-f"></i>}</h3>
                      <img className="adoptar-img" src={dog.img}alt=""/>
                      <Link className="adoptar-btn" to={`/adoptar/${dog.name}`}>Ver Más</Link>
                      </div>
              }) : <h2>No se encontraron resultados.</h2>}
         {/* {!loading ? <Pagination paginate={paginate} loading={loading} dogsPerPage={dogsPerPage} totalDogs={dogs.length}/>: null}      */}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Adoptar;