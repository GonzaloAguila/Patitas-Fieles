import { combineReducers } from "redux";
import dogsReducer from "./dogReducer";
import userReducer from "./userReducer";
import donationsReducer from "./donationsReducer";



export default combineReducers({
  dogsReducer,
  userReducer,
  donationsReducer
});