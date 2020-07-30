import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from '../pages/Menu/Admin';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import PrivateRoute from '../Util/Auth.js'

import "../assets/css/black-dashboard-react.css";
import "../assets/demo/demo.css";
import "../assets/css/nucleo-icons.css";

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/login' component = {Login}></Route>        
        <Route exact path='/register' component = {Register}></Route>                                 
        <PrivateRoute exact path='/' component = {Admin} />                                 
    </Switch>
  </BrowserRouter>
);

export default App;