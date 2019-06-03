import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";
import NavBar from "../../components/NavBar/NavBar";

class Dashboard extends Component {
  state = {
    items: ""
  };

  componentDidMount() {
    this.getParcels();
  }

  getParcels() {
    return axios
      .get("https://challenge3andela.herokuapp.com/api/v1/parcels", {
        withCredentials: true
      })
      .then(res => {
        this.mtd(res.data);
      });
  }
  mtd(data) {
    this.setState({ items: data["item info"] });
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
        <table>
          <tbody>
            <tr>
              <th>Destination</th>
              <th>Order Nickname</th>
              <th>Status</th>
              <th>Pickup Location</th>
            </tr>
            {itemValues}
          </tbody>
        </table>
      </>
    );
  }
}

export default Dashboard;
