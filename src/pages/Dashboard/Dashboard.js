import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = {
    items: ""
  };
  componentDidMount() {
    console.log("user dashboard");
    axios
      .get("https://challenge3andela.herokuapp.com/api/v1/parcels", {
        withCredentials: true
      })
      .then(res => {
        this.setState({ items: res.data["item info"] });
        console.log(res.data["item info"]);
      });
  }
  render() {
    const { items } = this.state;
    const itemList = items.map(item => {
      <>
        <div>{item.destination}</div>
        <div>{item.nickname}</div>
      </>;
    });
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="/dashboard">
            Home
          </a>
        </nav>
        <h1>user dashboard</h1>
        <p>under construction</p>
        {itemList}
      </>
    );
  }
}

export default Dashboard;
