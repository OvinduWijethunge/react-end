import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import UnauthRoute from './components/UnauthRoute';
import Home from './containers/Home';
import Login from './containers/Login';
import UnknownPage from './containers/UnknownPage';

let Routes = ({ childProps }) => (
    <Switch>
        <Redirect exact path="/" to="/home" />
        <AuthRoute path="/home" component={Home} props={childProps} />
        <UnauthRoute exact path="/login" component={Login} props={childProps} />

        {/* For unmatching URLs, following is the 404 page */}
        <Route component={UnknownPage} />
    </Switch>
);

export default Routes;
