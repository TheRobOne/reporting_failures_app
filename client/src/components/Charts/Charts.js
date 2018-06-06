import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFailures } from '../../actions/failureActions';
import BarChart from './BarChart';

class Charts extends Component {
    componentDidMount() {
        this.props.getFailures();
    }

    render() {
        return (
            <div>
                <BarChart failures={this.props.failures}/>
            </div>
        )
    }
}

Charts.propTypes = {
    getFailures: PropTypes.func.isRequired,
    failures: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    failures: state.failure
});

export default connect(mapStateToProps, { getFailures })(Charts);