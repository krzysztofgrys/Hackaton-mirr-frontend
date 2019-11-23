import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './scss/bootstrap/main.scss';
import axe from 'react-axe';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
