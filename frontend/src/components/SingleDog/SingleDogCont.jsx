import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SingleDog from "./SingleDog"
import "./style.css"

const SingleDogCont = ({history}) => {


  return (
    <Fragment>
        <SingleDog history={history}/>
    </Fragment>
  );
};

export default SingleDogCont;