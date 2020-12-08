import axios from "axios";
import {
   FETCH_DOG,
   FETCH_DOGS
  } from "../constants";
  
  const fetchDogsCreator = (data) => ({ 
    type: FETCH_DOGS, 
    data 
  });
  
  const fetchSingleDog = (data) => ({
    type: FETCH_DOG,
    data,
  });
  
  //////////USERS ADMIN
  
  export const fetchDogs = () => (dispatch) => {
    return axios.get("/api/dogs/getDogs")
    .then((res) => dispatch(fetchDogsCreator(res.data))
 )};
 
 export const fetchDog = (name) => (dispatch) => {
   console.log("estoy aca")
  return axios.get(`/api/dogs/${name}`)
  .then((res) => dispatch(fetchSingleDog(res.data))
)};
  
