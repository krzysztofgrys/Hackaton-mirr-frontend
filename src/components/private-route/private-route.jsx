import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute(props) {
    const {absolute, component: Component, hasAccess, ...rest} = props;

    return (
        <Route
            {...rest}
            render={(innerProps) => (
                hasAccess
                    ? <Component {...innerProps}/>
                    : <Redirect exact to='/login'/>
            )}/>
    );
};
