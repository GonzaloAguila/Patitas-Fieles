import { combineReducers } from "redux";
import dogsReducer from "./dogReducer";
import userReducer from "./userReducer";


export default combineReducers({
  dogsReducer,
  userReducer
});