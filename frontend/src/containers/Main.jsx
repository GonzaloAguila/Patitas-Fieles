import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../components/Home';

export default function Main () {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Fragment>
    )
}