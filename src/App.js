import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/bezinteresowni-logo.svg';
import './scss/bootstrap/main.scss';
import axe from 'react-axe';
import Routing from './components/routing';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Breadcrumbs from "./components/breadcrumbs";

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <header className="navbar px-md-4 d-flex justify-content-between border-bottom box-shadow">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="logo portalu bezinteresowni"/>
                            </Link>
                            <div>
                                <button className="btn btn-primary">Zaloguj</button>
                                <button className="btn btn-secondary">Zarejestruj</button>
                            </div>
                        </div>
                    </header>
                    <Breadcrumbs/>
                    <main className="container">
                        <div className="content row">
                            <Routing/>
                        </div>
                    </main>
                    <footer className="fixed-bottom border-top">
                        footer content ?
                    </footer>
                </Router>
            </div>
        );
    }
}

export default App;
