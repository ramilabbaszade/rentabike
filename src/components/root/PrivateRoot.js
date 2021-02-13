import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Routes} from "../../routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={ props => (
            localStorage.getItem("jwtToken") ?
            <Component {...props} /> :
            <Redirect to={{ pathname: Routes.signIn, state: { from: props.location } }} />
        ) }
        />
    );
};

export default PrivateRoute;