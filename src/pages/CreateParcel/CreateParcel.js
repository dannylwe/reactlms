import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createParcelAction } from "../../actions/createParcelActions";
import NavBar from "../../components/NavBar/NavBar";
import "./create.css";

export class CreateParcel extends Component {
  state = {
    destination: "",
    pickup: "",
    nickname: "",
    weight: "",
    height: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { destination, pickup, nickname } = this.state;
    const Weight = this.state.weight;
    const Height = this.state.height;
    const weight = parseInt(Weight);
    const height = parseInt(Height);
    const createDetails = { destination, pickup, nickname, weight, height };
    const createUrl = " https://challenge3andela.herokuapp.com/api/v1/parcels";
    this.props.createParcelAction(createUrl, createDetails, history, nickname);
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="create-title">
          <h4>
            <p>Create Parcel</p>
          </h4>
        </div>
        <div className="form-create">
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Pickup location</label>
              <input
                type="text"
                className="form-control"
                id="pickupInput"
                aria-describedby="pickupHelp"
                placeholder="Enter Pickup Location"
                name="pickup"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <label>Destination</label>
              <input
                type="text"
                className="form-control"
                id="destinationInput"
                aria-describedby="destinationHelp"
                placeholder="Destination"
                name="destination"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <label>Nickname</label>
              <input
                type="text"
                className="form-control"
                id="nicknameInput"
                aria-describedby="nicknameHelp"
                placeholder="Pichachu"
                name="nickname"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <label>Weight</label>
              <input
                type="number"
                className="form-control"
                id="weightInput"
                aria-describedby="weightHelp"
                placeholder="weight in kg < 10"
                name="weight"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <label>Height</label>
              <input
                type="number"
                className="form-control"
                id="heightInput"
                aria-describedby="heightHelp"
                placeholder="Height in kg < 10"
                name="height"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="submit-button">
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                id="parcelButton"
              >
                Create Parcel
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
    { createParcelAction }
  )(CreateParcel)
);
