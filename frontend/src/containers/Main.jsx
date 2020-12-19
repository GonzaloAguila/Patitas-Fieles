import React, { Fragment } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Adoptar from '../components/Adoptar/Adoptar';
import SingleDogCont from '../components/SingleDog/SingleDogCont';
import About from '../components/About/About';
import Login from '../components/Login/Login';
import Donar from '../components/Donar/Donar';
import Register from '../components/Register/Register';

export default function Main () {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/adoptar" component={Adoptar}/>
                <Route exact path="/donar" component={Donar}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/adoptar/:dogname" component={SingleDogCont} />
            </Switch>
        </Fragment>
    )
}