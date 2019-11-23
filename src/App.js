import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/bezinteresowni-logo.svg';
import './scss/bootstrap/main.scss';
import axe from 'react-axe';
import Routing from './components/routing';

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="navbar px-md-4 d-flex justify-content-between border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">
                            <img src={logo} alt="logo portalu bezinteresowni"/>
                        </a>
                        <div>
                            <button className="btn btn-primary">Zaloguj</button>
                            <button className="btn btn-secondary">Zarejestruj</button>
                        </div>
                    </div>
                </header>
                <main className="container">
                    <div className="content row">
                        <Routing/>
                    </div>
                </main>
                <footer className="fixed-bottom border-top">
                    footer content ?
                </footer>
            </div>
        );
    }
}

export default App;
