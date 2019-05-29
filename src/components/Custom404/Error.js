import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div>
        <h3>OOPS! That URL does not exist</h3>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Error;
