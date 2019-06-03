import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="/dashboard">
            Home
          </a>
          <a class="navbar-brand" href="/login">
            Logout
          </a>
        </nav>
      </>
    );
  }
}

export default NavBar;
