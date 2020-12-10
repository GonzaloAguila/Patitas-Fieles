import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../components/Home';
import Adoptar from '../components/Adoptar/Adoptar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SingleDogCont from '../components/SingleDog/SingleDogCont';
import About from '../components/About/About';
import Login from '../components/Login/Login';

export default function Main () {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/adoptar" component={Adoptar}/>
                <Route exact path="/about" component={About}/>
                <Route path="/adoptar/:dogname" component={SingleDogCont} />
            </Switch>
        </Fragment>
    )
}