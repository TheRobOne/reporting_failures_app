import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FailuresFeed extends Component {
  render() {
    const { failures } = this.props;
    let failureItem = failures.map((failure, index) => 
      <tr key={failure._id}>
        <th scope='row'>{index}</th>
        <td>{failure.building}</td>
        <td>{failure.roomNumber}</td>
        <td>{failure.authorEmail}</td>
        <td>{failure.description}</td>
        <td>{failure.state}</td>
      </tr>
    );
    
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Budynek</th>
            <th scope="col">Pokój</th>
            <th scope="col">Email</th>
            <th scope="col">Opis</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {failureItem}
        </tbody>
      </table>
    )
  };
}

FailuresFeed.propTypes = {
    failures: PropTypes.array.isRequired
};

export default FailuresFeed;