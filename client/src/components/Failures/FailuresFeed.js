import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FailureItem from './FailureItem';
import { sortBy } from 'underscore';

class FailuresFeed extends Component {
  constructor(props){
    super(props);
    this.state= {
      failureItems: []
    }
  }
  onClick(type) {
    const { failures } = this.props;
    let sortedObjs = sortBy( failures, type );
    let failureItems = sortedObjs.map((failure, index) => 
      <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
    );
    this.setState({failureItems});
  }

  static getDerivedStateFromProps(props, state){
    const { failures } = this.props;
    let failureItems = failures.map((failure, index) => 
      <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
    );
    this.setState({failureItems});
  }
  
  render() {
    

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => this.onClick("building")}>Budynek</th>
            <th scope="col" onClick={() => this.onClick("room")}>Pokój</th>
            <th scope="col" onClick={() => this.onClick("authorEmail")}>Email</th>
            <th scope="col" onClick={() => this.onClick("building")}>Opis</th>
            <th scope="col" onClick={() => this.onClick("building")}>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.failureItems}
        </tbody>
      </table>
    )
  };
}

FailuresFeed.propTypes = {
    failures: PropTypes.array.isRequired
};

export default FailuresFeed;