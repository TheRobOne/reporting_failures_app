import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFailureById, deleteFailure } from '../../actions/failureActions';
import { withRouter } from 'react-router-dom';

import './FailurePage.css';

class FailurePage extends Component {

    componentDidMount() {
        const failureId = window.location.pathname.split('/')[2];
        this.props.getFailureById(failureId);
    }

    onClickHandler(failureId) {
        this.props.deleteFailure(failureId, this.props.history)
    }

    render() {
        return (
        <div className="jumbotron">
            <h1 className="display-4">{this.props.failureById.description}</h1>
            <p className="lead">{this.props.failureById.description}</p>
            <p>{this.props.failureById.state}</p>
            { this.props.user.role === 'admin' ? <a className="btn btn-primary" href="#" role="button">Zmień stan usterki</a>: null }
            <br/>
            <br/>
            { this.props.user.email === this.props.failureById.authorEmail ? <a className="btn btn-danger" onClick={() => this.onClickHandler(this.props.failureById._id)} role="button">Usuń usterkę</a>: null }
        </div>
        )
    }
}

FailurePage.propTypes = {
    getFailureById: PropTypes.func.isRequired,
    deleteFailure: PropTypes.func.isRequired
  }

const mapStateToProps = state => ({
    failureById: state.failure.failureById,
    user: state.auth.user
  });
export default connect(mapStateToProps, { getFailureById, deleteFailure })(withRouter(FailurePage));
