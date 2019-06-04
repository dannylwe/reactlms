import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./login.scss";
import { connect } from "react-redux";
import { loginAuthentication } from "../../actions/loginActions";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { username, password } = this.state;
    const loginDetails = { username, password };
    const loginUrl =
      " https://challenge3andela.herokuapp.com/api/v1/auth/login";

    this.props.loginAuthentication(loginUrl, loginDetails, history);
  };

  render() {
    return (
      <>
        {/* welcome message */}
        <div className="login-title">
          <Link to="/login">
            <h1>Welcome to SendIT</h1>
          </Link>
        </div>
        <div className="form-login">
          <form onSubmit={this.onSubmit}>
            {/* username input */}
            <div className="form-group center-form">
              <label for="emailInput">Username</label>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                name="username"
                onChange={e => this.handleChange(e)}
              />
              {/* password input */}
              <div className="password-input">
                <label for="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password..."
                  name="password"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div class="signup-login">
              <span>
                <text>Not a member, </text>
                <Link to="/signup">Sign up</Link>
              </span>
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="btn btn-primary login-btn"
              id="loginButton"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(
    null,
    { loginAuthentication }
  )(Login)
);
