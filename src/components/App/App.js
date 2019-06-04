import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error from "../Custom404/Error";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Admin from "../../pages/Admin/Admin";
import Signup from "../../pages/Signup/Signup";
import {
  PublicRoute,
  AuthenticatedRoute
} from "../ProtectedRoutes/ProtectedRoutes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PublicRoute exact path="/login" component={Login} />
          <AuthenticatedRoute path="/dashboard" component={Dashboard} />
          <AuthenticatedRoute path="/admin" component={Admin} />
          <PublicRoute path="/signup" component={Signup} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
