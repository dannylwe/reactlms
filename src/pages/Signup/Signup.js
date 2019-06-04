import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signupAuthentication } from "../../actions/signupActions";
import Spinner from "../../components/LoadingSpinner/Spinner";
import "./signup.scss";
import { SIGN_UP } from "../../actions/types";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    handphone: "",
    isLoading: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  passwordCheck = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("passwords not equal");
      this.setState({ isLoading: false });
      throw new Error("Passwords not Equal!!");
    }
  };
  onSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { password, confirmPassword, email, username } = this.state;
    const Handphone = this.state.handphone;
    const handphone = parseInt(Handphone);
    this.passwordCheck(password, confirmPassword);
    this.setState({ isLoading: true });
    const loginDetails = { email, password, handphone, username };
    const loginUrl = "https://challenge3andela.herokuapp.com/api/v1/auth/user";
    this.props.signupAuthentication(loginUrl, loginDetails, history);
  };
  render() {
    return (
      <>
        <div className="signup-title">
          <a href="/login">
            <h2>Signup To sendIT</h2>
          </a>
        </div>
        <div className="signup-form">
          <form onSubmit={this.onSubmit}>
            <div className="signup-forms input-forms">
              <div className="email-input">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  name="email"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="username-input">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  aria-describedby="usernameHelp"
                  placeholder="Username"
                  name="username"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="phone-input">
                <label>Hand Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="habdphoneInput"
                  aria-describedby="handphoneHelp"
                  placeholder="e.g 0773504973"
                  name="handphone"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="password-input">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordlInput"
                  aria-describedby="passwordHelp"
                  placeholder="Enter Password"
                  name="password"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="confirm-input">
                <label> Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPasswordlInput"
                  aria-describedby="passwordHelp"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="submit-button">
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                id="signupButton"
              >
                Sign Up {this.state.isLoading ? <Spinner /> : ""}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(
    null,
    { signupAuthentication }
  )(Signup)
);
