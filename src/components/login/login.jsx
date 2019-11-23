import React from 'react';
import LoginForm from "../forms/login/Login";
import Logo from '../../assets/logo.png'

export default function Login() {
    return (
        <main className="container">
            <div className="content">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="text-center mb-4">
                            <img className="mb-4" src={Logo} alt="" width="100" height="100"/>
                            <h1 className="h3 mb-3 font-weight-normal">Portal bezinteresowni</h1>
                            <p>Zaloguj się i pomagaj razem z nami!</p>
                        </div>
                        <LoginForm/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </main>
    );
}
