import React, { Component } from "react";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import NavBar from "../../components/NavBar/NavBar";

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
        <NavBar />
        <br />
        <h2>Welcome Admin</h2>
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
