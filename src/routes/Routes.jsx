import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Extrato from '../pages/Extrato';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/extrato" component={Extrato} />
    </Switch>
  </BrowserRouter>
)

export default Routes;