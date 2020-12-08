import {
    FETCH_DOGS,
    FETCH_DOG
  } from "../constants";
  
  const initialState = {
    dogs: [],
    selectedDog: {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOGS:
        return { ...state, dogs: action.data };
      case FETCH_DOG:
        return { ...state, selectedDog: action.data };
      default:
        return state;
    }
} 