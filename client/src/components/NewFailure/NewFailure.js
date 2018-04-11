import React, { Component } from "react";
import Building from "../Building/Building";
import Room from "../Room/Room";

import "./NewFailure.css";

class NewFailure extends Component {
  constructor() {
    super();
    this.state = {
      building: "A"
    };
  }

  onChangeHandler(event) {
    this.setState({ building: event.target.value }, () => {});
  }

  render() {
    return (
      <form className="new-failure-form">
        <div className="row">
          <div className="col">
            <label> Budynek: </label>
          </div>
          <Building onChangeHandler={event => this.onChangeHandler(event)} />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label> Sala: </label>
          </div>
          <Room building={this.state.building} />
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label> Adres Email: </label>
          </div>
          <div className="col">
            <input className="form-control" type="text" id="email" />
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
            />
          </div>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Dodaj
        </button>
      </form>
    );
  }
}

export default NewFailure;
