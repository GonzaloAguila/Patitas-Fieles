import {
    FETCH_DOGS,
    FETCH_DOG,
    FETCH_MALE_DOGS,
    FETCH_FEMALE_DOGS,
    FETCH_ONE_DOG
  } from "../constants";
  
  const initialState = {
    dogs: [],
    selectedDog: {},
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOGS:
        return { ...state, dogs: action.data };
      case FETCH_DOG:
        return { ...state, selectedDog: action.data };
      case FETCH_FEMALE_DOGS:
        return { ...state, dogs: action.data };
      case FETCH_MALE_DOGS:
        return { ...state, dogs: action.data };  
      case FETCH_ONE_DOG:
          return { ...state, dogs: [action.data]};    
      default:
        return state;
    }
} 