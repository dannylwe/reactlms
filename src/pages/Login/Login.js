import React, { Component } from "react";
import "./login.scss";
import axios from "axios";

class Login extends Component {
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
    const { username, password } = this.state;
    const loginDetails = { username, password };
    const loginUrl =
      " https://challenge3andela.herokuapp.com/api/v1/auth/login";

    axios.post(loginUrl, loginDetails, { withCredentials: true }).then(resp => {
      if (resp.data.message == "Logged in successfully. Welcome to sendIT") {
        this.props.history.push("/dashboard");
      } else if (resp.data.message == "Logged in as admin. Dashboard") {
        this.props.history.push("/admin");
      }
    });
  };

  render() {
    return (
      <>
        {/* welcome message */}
        <div className="login-title">
          <h1>Welcome to SendIt</h1>
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
            {/* submit button */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
