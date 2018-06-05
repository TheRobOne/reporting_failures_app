import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FailureItem from './FailureItem';

class FailuresFeed extends Component {
  render() {
    const { failures } = this.props;
    let failureItems = failures.map((failure, index) => 
      <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
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
          {failureItems}
        </tbody>
      </table>
    )
  };
}

FailuresFeed.propTypes = {
    failures: PropTypes.array.isRequired
};

export default FailuresFeed;