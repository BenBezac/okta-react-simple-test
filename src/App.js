import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'; 
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";
const API_URL = process.env.REACT_APP_OKTA_URL;
const API_URL_FULL = `${API_URL}/oauth2/default`;

function onAuthRequired({history}) {
    history.push('/login');
}

function App() {
  return (
    <Router>
        <Security issuer={API_URL_FULL}
                  clientId={process.env.REACT_APP_OKTA_API_KEY}
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}
                  pkce={true} >
            <div className="App">
                <Navbar />
                <div className="container">
                    <Route path="/" exact={true} component={Home}></Route>
                    <SecureRoute path='/Staff' component={Staff} />
                    <Route path='/login' render={() => <Login baseUrl={API_URL} />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                </div>
            </div>
        </Security>
    </Router>
  );
}

export default App;
