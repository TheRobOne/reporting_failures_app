import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FailureItem from './FailureItem';
import { sortBy } from 'underscore';

class FailuresFeed extends Component {
  constructor(props){
    super(props);
    this.state= {
      failureItems: null
    }
  }
  onClick(type) {
    const { failures } = this.props;
    let sortedObjs = sortBy( failures, type );
    let failureItems = sortedObjs.map((failure, index) => 
      <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
    );
    this.setState({failureItems});
    this.forceUpdate();
    //console.log(this.state)
  }

  // static getDerivedStateFromProps(props, state){
  //   const { failures } = this.props;
  //   let failureItems = failures.map((failure, index) => 
  //     <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
  //   );
  //   this.setState({failureItems});
  // }
  
  // componentWillReceiveProps(){
  //   const { failures } = this.props;
  //   let failureItems = failures.map((failure, index) => 
  //     <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
  //   );
  //   this.setState({failureItems});
  // }

  render() {
    let failureItemsFromProps = this.props.failures.map((failure, index) => 
      <FailureItem failure={failure} user={this.props.user} index={index} key={index}/>
    );
    
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => this.onClick("building")} style={{cursor: 'pointer'}}>Budynek</th>
            <th scope="col"> Pokój</th>
            <th scope="col" onClick={() => this.onClick("authorEmail")} style={{cursor: 'pointer'}}>Email</th>
            <th scope="col">Opis</th>
            <th scope="col" onClick={() => this.onClick("state")} style={{cursor: 'pointer'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.failureItems === null ? failureItemsFromProps : this.state.failureItems}
        </tbody>
      </table>
    )
  };
}

FailuresFeed.propTypes = {
    failures: PropTypes.array.isRequired
};

export default FailuresFeed;