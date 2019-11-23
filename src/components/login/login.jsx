import React from 'react';
import LoginForm from "../forms/login/Login";

export default function Login() {
    return (
        <main className="container">
            <div className="content">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <form className="form-signin mt-5">
                            <div className="text-center mb-4">
                                <img className="mb-4" src="assets/logo.png" alt="" width="100" height="100"/>
                                <h1 className="h3 mb-3 font-weight-normal">Portal bezinteresowni</h1>
                                <p>Zaloguj się i pomagaj razem z nami!</p>
                            </div>
                            {/*<LoginForm/>*/}
                            <div className="form-label-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="adres email"
                                       required="" autoFocus="" autoComplete="off" />
                            </div>
                            <div className="form-label-group">
                                <label htmlFor="inputPassword">Hasło</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Hasło"
                                       required="" autoComplete="off"/>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <div>
                                    <input type="checkbox" value="remember-me"/>Pamiętaj mnie
                                    </div>
                                </label>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Zaloguj się</button>
                            <button className="btn btn-link btn-block" type="submit">Nie masz konta? Zarejestruj się!</button>
                        </form>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </main>
    );
}
