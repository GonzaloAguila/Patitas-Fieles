import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleDog from "./SingleDog"
import "./style.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {fetchDogs} from "../../../redux/action-creators/dog-actions";
import {fetchDog} from "../../../redux/action-creators/dog-actions";
import regeneratorRuntime from "regenerator-runtime";


const SingleDogCont = ({history, match}) => {
  
  const dispatch = useDispatch()
  const { dogs,selectedDog } = useSelector((state) => state.dogsReducer); 
  const { loggedUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchDogs()).then(() => {
      dispatch(fetchDog(match.params.dogname))
    })
  }, []); 

  useEffect(() => {
     history.push(`/adoptar/${selectedDog.name}`)
  }, [selectedDog])




   //Array circular para ir cambiando de perros, se lo paso al dummy
   const nextDog = (e,name) => {
       e.preventDefault()
       let dogNames = dogs.map((dog) => dog.name)//array de nombres ordenados
       let currentDogIndex= dogNames.indexOf(name)//0
       currentDogIndex < dogNames.length-1 
       ? currentDogIndex = currentDogIndex+1 
       : currentDogIndex = 0;
       dispatch(fetchDog(dogNames[currentDogIndex]))
   }
  
  return (
    <Fragment>
        <Navbar/>
        <SingleDog history={history} dogs={dogs} selectedDog={selectedDog} nextDog={nextDog} loggedUser={loggedUser}/>
        <Footer/>
    </Fragment>
  );
};

export default SingleDogCont;