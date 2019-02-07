import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import UnknownPage from './containers/UnknownPage';
import AssetPoolView from './containers/assets/AssetPoolView';

let HomeRoutes = ({ childProps }) => (
    <Switch>
        <AuthRoute path="/home/assetpool" component={AssetPoolView} props={childProps} />

        {/* For unmatching URLs, following is the 404 page */}
        <Route component={UnknownPage} />
    </Switch>
);

export default HomeRoutes;