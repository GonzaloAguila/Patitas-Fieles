import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../components/Home';
import Adoptar from '../components/Adoptar/Adoptar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SingleDogCont from '../components/SingleDog/SingleDogCont';

export default function Main () {
    return (
        <Fragment>
          <Route path="/" component={Navbar}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/adoptar" component={Adoptar}/>
                <Route path="/adoptar/:dogname" component={SingleDogCont} />
            </Switch>
          <Route path="/" component={Footer}/>
        </Fragment>
    )
}