import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// This custom route is used for Unauthenticated routing.
// if the user is not authenticated, he can navigate through
// non-protected content freely. (normal routing)
// Else the user is redirected to the last page which he/she
// was accessing before being unauthorized.

// Following funtion is used for striping special characters from URL,
// and replacing them with normal characters to produce a URL string
// in the form of a pathname. (for routing)
function querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "//$&");

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }
    else {
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}

let UnauthRoute = ({ component: Comp, props: childProps, ...rest }) => {
    const redirect = querystring("redirect");
    return (
        <Route
            {...rest}
            render={(props) => (
                !childProps.isAuth
                    ? <Comp {...props} {...childProps} />
                    : <Redirect to={redirect === "" || redirect === null ? "/home" : redirect} />
            )}
        />
    )
};

export default UnauthRoute;
