import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './scss/bootstrap/main.scss';
import axe from 'react-axe';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import PostAdd from './components/post-add';
import PostView from './components/post-view';

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <p className='text-primary'>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/post/add">
                        <PostAdd/>
                    </Route>
                    <Route path="/post/:postId">
                        <PostView/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
