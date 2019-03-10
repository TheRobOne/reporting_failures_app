import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFailureById } from '../../actions/failureActions';

import './FailurePage.css';

class FailurePage extends Component {

    componentDidMount() {
        const failureId = window.location.pathname.split('/')[2];
        this.props.getFailureById(failureId);
    }

    render() {
        return (
        <div className="jumbotron">
            <h1 className="display-4">{this.props.failureById.description}</h1>
            <p className="lead">{this.props.failureById.description}</p>
            <p>{this.props.failureById.state}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Zmień stan usterki</a>
        </div>
        )
    }
}

FailurePage.propTypes = {
    getFailureById: PropTypes.func.isRequired
  }

const mapStateToProps = state => ({
    failureById: state.failure.failureById
  });
  
export default connect(mapStateToProps, { getFailureById })(FailurePage);
