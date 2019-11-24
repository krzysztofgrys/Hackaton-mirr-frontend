import React from 'react';
import {Switch, Route} from "react-router-dom";
import routes from './routes';
import Error from '../error';
import PrivateRoute from '../private-route';

export default function routing() {
    const hasAccess = sessionStorage.hasOwnProperty('user');
    const loginRoute = routes.find(route => route.path === '/login');
    const filteredRoutes = routes.filter(route => route.path !== '/login');
    return (
        <Switch>
            {filteredRoutes.map((route, index) =>
                <PrivateRoute hasAccess={hasAccess} exact path={route.path} component={route.component} key={index}/>)}
            <Route exact path={loginRoute.path} component={loginRoute.component} />
            <Route component={Error} />
        </Switch>
    );
}
