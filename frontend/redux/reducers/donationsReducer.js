import {
    GET_DONATIONS
  } from "../constants";
  
  const initialState = {
    allDonations: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_DONATIONS:
        return { ...state, allDonations: action.data };   
      default:
        return state;
    }
} 