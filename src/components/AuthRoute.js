import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// This custom Route is used for authenticated routing.
// If the user is authenticated, he can navigate as usual. (Route normally)
// Else the user is redirected to the Login page.

let AuthRoute = ({ component: Comp, props: childProps, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                childProps.isAuth
                    ? <Comp {...props} {...childProps} />
                    : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
            )}
        />
    )
};

export default AuthRoute;
