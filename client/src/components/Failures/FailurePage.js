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
            { this.props.user.role === 'admin' ? <a className="btn btn-primary" href="#" role="button">Zmień stan usterki</a>: null }
            { this.props.user.email === this.props.failureById.authorEmail ? <a className="btn btn-danger" href="#" role="button">Usuń usterkę</a>: null }
        </div>
        )
    }
}

FailurePage.propTypes = {
    getFailureById: PropTypes.func.isRequired
  }

const mapStateToProps = state => ({
    failureById: state.failure.failureById,
    user: state.auth.user
  });
  
export default connect(mapStateToProps, { getFailureById })(FailurePage);
