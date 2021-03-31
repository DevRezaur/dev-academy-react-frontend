import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    let user = JSON.parse(localStorage.getItem('user'));
    let access = false;

    if(user.role === rest.role)
        access = true;

    return (
        <Route {...rest}
            render = { props => 
            (
                access ? <Component {...props} /> : <Redirect to="/sign-in" />
            )}
        />
    )
}

export default PrivateRoute
