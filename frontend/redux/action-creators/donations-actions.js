import axios from "axios";
import {
 GET_DONATIONS,
  } from "../constants";
  
  const fetchDonationsCreator = (data) => ({ 
    type: GET_DONATIONS, 
    data 
  });
  
 export const fetchDonations = () => (dispatch) => {
  return axios.get(`/api/donations/getDonations`)
  .then(({data}) => dispatch(fetchDonationsCreator(data))
)};

