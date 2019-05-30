import React, { Component } from "react";
import axios from "axios";
import "../Dashboard/Dashboard.css";

class Admin extends Component {
  state = {
    items: ""
  };
  componentDidMount() {
    axios
      .get("https://challenge3andela.herokuapp.com/api/v1/parcels/all", {
        withCredentials: true
      })
      .then(res => {
        this.setState({ items: res.data["item info"] });
      });
  }

  render() {
    const { items } = this.state;

    const itemValues =
      items.length > 0
        ? items.map(item => (
            <tr>
              <th>{item.destination}</th>
              <th>{item.nickname}</th>
              <th>{item.status}</th>
              <th>{item.pickup}</th>
            </tr>
          ))
        : "loading......";
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

        <br />
        <table>
          <tr>
            <th>Destination</th>
            <th>Order Nickname</th>
            <th>Status</th>
            <th>Pickup Location</th>
          </tr>
          {itemValues}
        </table>
      </>
    );
  }
}

export default Admin;
