import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFailures } from '../../actions/failureActions';
import FailuresFeed from './FailuresFeed';

class Failures extends Component {
  componentDidMount() {
    this.props.getFailures();
  }

  render() {
    const { failures } = this.props.failure;
    let failureContent = <FailuresFeed failures={failures}/>

    return (
      <div>
        {failureContent}
      </div>
    )
  }
}

Failures.propTypes = {
  getFailures: PropTypes.func.isRequired,
  failure: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  failure: state.failure
})

export default connect(mapStateToProps, { getFailures })(Failures);