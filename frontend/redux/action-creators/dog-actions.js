import axios from "axios";
import {
   FETCH_DOG,
   FETCH_DOGS,
   FETCH_FEMALE_DOGS,
   FETCH_MALE_DOGS,
   FETCH_ONE_DOG
  } from "../constants";
  
  const fetchDogsCreator = (data) => ({ 
    type: FETCH_DOGS, 
    data 
  });
  
  const fetchSingleDog = (data) => ({
    type: FETCH_DOG,
    data
  });

  const fetchFemaleDogsCreator = (data) => ({
    type: FETCH_FEMALE_DOGS,
    data
  });

  const fetchMaleDogsCreator = (data) => ({
    type: FETCH_MALE_DOGS,
    data
  });

  const fetchOneDogCreator = (data) => ({
    type: FETCH_ONE_DOG,
    data
  })
    
 export const fetchDogs = () => (dispatch) => {
    return axios.get("/api/dogs/getDogs")
    .then((res) => dispatch(fetchDogsCreator(res.data))
 )};
 
 export const fetchDog = (name) => (dispatch) => {
  return axios.get(`/api/dogs/${name}`)
  .then((res) => dispatch(fetchSingleDog(res.data))
)};

export const fetchFemaleDogs = () => (dispatch) => {
  return axios.get("/api/dogs/getDogs/getFemaleDogs")
  .then((res) => dispatch(fetchFemaleDogsCreator(res.data))
)};

export const fetchMaleDogs = () => (dispatch) => {
  return axios.get("/api/dogs/getDogs/getMaleDogs")
  .then((res) => dispatch(fetchMaleDogsCreator(res.data))
)};

export const fetchOneDog = (name) => (dispatch) => {
  return axios.get(`/api/dogs/${name}`)
  .then((res) => dispatch(fetchOneDogCreator(res.data))
)
}