import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom";
import App from "./components/App/App";
import Heading from "./components/Heading/Heading";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const Routing = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/heading" component={Heading} />
        <Route component={Error} />
      </Switch>
    </Router>
  </>
);

ReactDOM.render(Routing, document.getElementById("app"));

module.hot.accept();
