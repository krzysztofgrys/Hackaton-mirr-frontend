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

    componentDidMount() {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.user = JSON.stringify({
                id: 1,
                email: 'user@bezinteresowni.pl',
                email_verified_at: null,
                created_at: '2019-11-23 15:05:14',
                updated_at: '2019-11-23 15:05:14',
                first_name: 'przykładowy',
                last_name: 'użytkownik',
                date_of_birth: '1969-11-23 00:00:00',
                phone_number: '123555789',
                addresses_id: 1,
                address: {
                    id: 1,
                    city: 'Wrocław',
                    zip_code: '53-030',
                    street: 'Pl Powstańców Śląskich',
                    house_number: '7',
                    lat: 51.21,
                    lng: 17.2
                }
            });
            console.log(JSON.parse(sessionStorage.user));
        } else {
            console.error('Your browser does not support local storage.');
        }
    }
}

export default App;
