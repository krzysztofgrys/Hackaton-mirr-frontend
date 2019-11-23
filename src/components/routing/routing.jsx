import React from 'react';
import {Switch, Route} from "react-router-dom";
import routes from './routes';
import Error from '../error';

export default function routing() {
    return (
        <Switch>
            {routes.map((route, index) => <Route exact path={route.path} component={route.component} key={index}/>)}
            <Route component={Error} />
        </Switch>
    );
}
