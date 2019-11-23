import React from 'react';
import {Switch, Route} from "react-router-dom";
import routes from './routes';

export default function routing() {
    return (
        <Switch>
            {routes.map((route, index) => <Route path={route.path} component={route.component} key={index}/>)}
        </Switch>
    );
}
