import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/dashboard">
            Home
          </a>
          <a
            className="navbar-brand"
            href="/login"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Logout
          </a>
        </nav>
      </>
    );
  }
}

export default NavBar;
