import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/bezinteresowni-logo.svg';
import './scss/bootstrap/main.scss';
import axe from 'react-axe';
import Routing from './components/routing';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";
import Breadcrumbs from "./components/breadcrumbs";
import LinkButton from "./components/link-button";

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

export default function App() {
    const isUserLoggedIn = sessionStorage.hasOwnProperty('user');
    const user = JSON.parse(sessionStorage.getItem('user'));

    const LoginSection = () => {
        return (
            <div>
                {!isUserLoggedIn && <LinkButton to='/login' className="btn btn-primary">Zaloguj</LinkButton>}
                {!isUserLoggedIn && <LinkButton to='/' className="btn btn-secondary ml-1">Zarejestruj</LinkButton>}
                {isUserLoggedIn && `Witaj ${user.first_name}!`}
            </div>
        );
    };

    const Header = (props) => {
        const {location: {pathname}} = props;
        if (pathname === '/login') {
            return null;
        }
        return (
            <React.Fragment>
                <header className="navbar px-md-4 d-flex justify-content-between border-bottom box-shadow">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo portalu bezinteresowni"/>
                        </Link>
                        <LoginSection/>
                    </div>
                </header>
                <Breadcrumbs/>
            </React.Fragment>);
    };

    const HeaderWithRouter = withRouter(Header);

    return (
        <div className="App">
            <Router>
                {<HeaderWithRouter/>}
                <main className="container">
                    <div className="content row">
                        <Routing/>
                    </div>
                </main>
            </Router>
        </div>
    );
}
