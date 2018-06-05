import React, { Component } from 'react';
import { updateFailure } from '../../actions/failureActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class FailureItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          failureState: this.props.failure.state
        }
    }

    onSubmit(event) {
        event.preventDefault();
        let failure = {
            state: this.state.failureState
        };

        this.props.updateFailure(this.props.failure._id, failure, this.props.history);
    }
    
    onChange(event) {
        this.setState({failureState: event.target.value})
    }
    
    render() {
        const { failure } = this.props;
        let failureItem = ''

        if(this.props.user.role === 'admin'){
            failureItem = (
                <tr key={failure._id}>
                    <th scope='row'>{this.props.index + 1}</th>
                    <td>{failure.building}</td>
                    <td>{failure.roomNumber}</td>
                    <td>{failure.authorEmail}</td>
                    <td>{failure.description}</td>
                    <td>
                        <form style={{margin: 0, padding: 0}} onSubmit={event => this.onSubmit(event)}>
                        <input 
                            style={{display: 'inline', width: '50%'}} 
                            type="text" value={this.state.failureState} 
                            className="form-control" 
                            onChange={event => this.onChange(event)}
                        />
                        <input 
                            style={{display: 'inline', marginLeft: 5}} 
                            type="submit" 
                            className="btn btn-info submit" 
                            value="zapisz" 
                        />
                        </form>
                    </td>
                </tr>
            );
        } else {
            failureItem = (
                <tr key={failure._id}>
                    <th scope='row'>{this.props.index + 1}</th>
                    <td>{failure.building}</td>
                    <td>{failure.roomNumber}</td>
                    <td>{failure.authorEmail}</td>
                    <td>{failure.description}</td>
                    <td>{failure.state}</td>
                </tr> 
            );
        }

        return (
            <React.Fragment>
                {failureItem}
            </React.Fragment>
            
        )
    }
}

FailureItem.propTypes = {
    updateFailure: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
  });
  
  export default connect(mapStateToProps, { updateFailure })(withRouter(FailureItem))