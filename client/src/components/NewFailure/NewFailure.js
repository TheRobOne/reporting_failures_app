import React, { Component } from "react";
import Building from "../Building/Building";
import Room from "../Room/Room";

import "./NewFailure.css";

class NewFailure extends Component {
  constructor() {
    super();
    this.state = {
      building: "A",
      room: "",
      email: "",
      description: ""
    };
  }

  changeBuilding(event) {
    this.setState({ building: event.target.value });
  }

  changeRoom(event) {
    console.log(this.state.room)
    this.setState({ room: event.target.value });
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changeDescription(event) {
    this.setState({ description: event.target.value });
  }

  addNewFailure() {
    console.log(
      `roomNumber: ` +
        this.state.room +
        `building: ` +
        this.state.building +
        `description: ` +
        this.state.description +
        `authorEmail: ` +
        this.state.email
    );
    fetch("http://localhost:3000/failures", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        roomNumber: this.state.room,
        building: this.state.building,
        description: this.state.description,
        authorEmail: this.state.email
      })
    });
  }

  render() {
    return (
      <form className="new-failure-form">
        <div className="row">
          <div className="col">
            <label> Budynek: </label>
          </div>
          <Building onChangeHandler={event => this.changeBuilding(event)} />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label> Sala: </label>
          </div>
          <Room
            building={this.state.building}
            value={this.state.room}
            onChangeHandler={event => this.changeRoom(event)}
          />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label> Adres Email: </label>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="email"
              value={this.state.email}
              onChange={event => this.changeEmail(event)}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label> Opis usterki: </label>
          </div>
          <div className="col">
            <textarea
              className="form-control"
              rows="4"
              cols="50"
              id="description"
              value={this.state.description}
              onChange={event => this.changeDescription(event)}
            />
          </div>
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => this.addNewFailure()}
        >
          Dodaj
        </button>
      </form>
    );
  }
}

export default NewFailure;
