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
import PostList from './components/post-list';

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

class App extends React.Component {
    render() {
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
            </div>
        );
    }

    componentDidMount() {
        if (typeof(Storage) !== "undefined") {
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
