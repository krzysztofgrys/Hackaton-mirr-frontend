import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import PostAdd from "../post-add/post-add";
import PostList from "../post-list/post-list";
import PostView from "../post-view";
import Home from "../home/home";

export default function routing(){
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/post/add">
                    <PostAdd/>
                </Route>
                <Route path="/post/list">
                    <PostList/>
                </Route>
                <Route path="/post/:postId">
                    <PostView/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}
