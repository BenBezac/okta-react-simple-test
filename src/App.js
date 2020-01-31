import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";


function onAuthRequired({history}) {
    history.push('/login');
}

function App() {
  return (
    <Router>
        <Security issuer='XXXXXXX/oauth2/default'
                  clientId='YYYYYYY'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}
                  pkce={true} >
            <div className="App">
                <Navbar />
                <div className="container">
                    <Route path="/" exact={true} component={Home}></Route>
                    <SecureRoute path='/Staff' component={Staff} />
                    <Route path='/login' render={() => <Login baseUrl='XXXXXXX' />} />
                    <Route path='/implicit/callback' component={ImplicitCallback} />
                </div>
            </div>
        </Security>
    </Router>
  );
}

export default App;
