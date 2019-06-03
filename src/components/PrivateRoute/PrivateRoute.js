import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route render={props => (rest.isLoggedIn ? <Component {...props} {...rest} />
    : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }}
      />
    ))}
  />
);
PrivateRoute.defaultProps = {
  component: '',
  location: '',
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.string,
};

export default PrivateRoute;
