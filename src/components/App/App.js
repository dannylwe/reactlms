import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Error from "../Custom404/Error";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Admin from "../../pages/Admin/Admin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isLoggedIn={localStorage.getItem("userAuthenticated")}
          />
          <PrivateRoute
            path="/admin"
            component={Admin}
            isLoggedIn={localStorage.getItem("userAuthenticated")}
          />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
