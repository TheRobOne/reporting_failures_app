import React, { Component } from "react";
import Building from "../Building/Building";
import Room from "../Room/Room";
import { addFailure } from '../../actions/failureActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import "./NewFailure.css";

class NewFailure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      building: 'A',
      updatedBuilding: '',
      room: '214',
      updatedRoom: '',
      email: this.props.user.email,
      description: ''
    };
  }

  changeBuilding(event) {
    const newBuilding = event.target.value;
    let room = this.props.rooms_list;

    this.setState({ building: newBuilding, room: room.rooms_list[0].number }, newBuilding => {
      this.updateBuilding(newBuilding);
    });
  }

  updateBuilding(updatedBuilding) {
    let room = this.props.rooms_list;

    this.setState({ updatedBuilding, room: room.rooms_list[0].number });
  }

  changeRoom(event) {
    const newRoom = event.target.value;
    this.setState({ room: newRoom }, newRoom => {
      this.updateRoom(newRoom);
    });
  }

  updateRoom(updatedRoom) {
    this.setState({ updatedRoom });
  }
  
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    let newFailure = {
      roomNumber: this.state.room,
      building: this.state.building,
      description: this.state.description,
      authorEmail: this.state.email
    };

    this.props.addFailure(newFailure, this.props.history);
  }

  render() {
    return (
      <form className="new-failure-form" onSubmit={event => this.onSubmit(event)}>
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
        <input type="submit" className="btn btn-info btn-block mt-4 submit" value="Dodaj"/>
      </form>
    );
  }
}

NewFailure.propTypes = {
  addFailure: PropTypes.func.isRequired,
  rooms_list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  rooms_list: state.room,
  user: state.auth.user
});

export default connect(mapStateToProps, { addFailure })(withRouter(NewFailure));
