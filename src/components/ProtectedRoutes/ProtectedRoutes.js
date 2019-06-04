import React from "react";
import { Redirect, Route } from "react-router-dom";

const isLoggedIn = localStorage.getItem('userAuthenticated');

export const AuthenticatedRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={props =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  export const PublicRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={props =>
          isLoggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
        }
      />
    );
  };
