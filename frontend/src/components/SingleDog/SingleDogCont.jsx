import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleDog from "./SingleDog"
import "./style.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import patitas from "../../img/patitas.png"
import {fetchDogs} from "../../../redux/action-creators/dog-actions";
import {fetchDog} from "../../../redux/action-creators/dog-actions";
import regeneratorRuntime from "regenerator-runtime";


const SingleDogCont = ({history, match}) => {

  const { dogs } = useSelector((state) => state.dogsReducer); 
  const { selectedDog } = useSelector((state) => state.dogsReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('entre al effect')
    dispatch(fetchDogs()).then(() => {
      dispatch(fetchDog(match.params.dogname))
    })
  }, []); 

   //Array circular para ir cambiando de perros, se lo paso al dummy
   const nextDog = (e,name) => {
       e.preventDefault()
       let dogNames = dogs.map((dog) => dog.name)//array de nombres ordenados
       let currentDogIndex= dogNames.indexOf(name)//0
       console.log(currentDogIndex, 'index')
       currentDogIndex < dogNames.length-1 
       ? currentDogIndex = currentDogIndex+1 
       : currentDogIndex = 0;
       dispatch(fetchDog(dogNames[currentDogIndex]))
       .then(() => {
           history.push(`/adoptar/${selectedDog.name}`)
       })
       return 
   }
  
  return (
    <Fragment>
        <Navbar/>
        <SingleDog history={history} dogs={dogs} selectedDog={selectedDog} nextDog={nextDog}/>
        <Footer/>
    </Fragment>
  );
};

export default SingleDogCont;