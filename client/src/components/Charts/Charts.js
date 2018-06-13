import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFailures } from '../../actions/failureActions';
import BarChart from './BarChart';

class Charts extends Component {
    constructor(props){
        super(props);
        let chart = null;
        this.state = {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0
        }
    }
    componentDidMount() {
        this.props.getFailures();
    }

    getFailuresForEachMonth(failure){
        let date = new Date(failure.date);
        let month = date.getMonth();
        switch(month) {
            case 0:
                this.setState(prevState => {
                    return {january: prevState.january + 1}
                });
                break;
            case 1:
                this.setState(prevState => {
                    return {february: prevState.february + 1}
                });
                break;
            case 2:
                this.setState(prevState => {
                    return {march: prevState.march + 1}
                });
                break;
            case 5:
                this.setState((prevState) => {
                    console.log("prev " + prevState.june)
                    console.log("state " + this.state.june)
                    return {june: prevState.june + 1}
                });
                break;
            default:
                console.log("default")
        }
        
    }

    onClick(chartType){
        this.setState({
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0
        });
        const failures = this.props.failures;
        for(let i = 0; i < failures.length; i++){
            this.getFailuresForEachMonth(failures[i]);
        }
        const data = [this.state.january, this.state.february, this.state.march, this.state.april, this.state.may, this.state.june];
        console.log("data")
        console.log(data)
        switch(chartType) {
            case "bar":
                this.chart = <BarChart data={data}/>
                break;
            case "doughnut":
                break;
            case 2:
                break;
            default:
                break;
        }
        //console.log(this.state)
        
    }

    render() {
        return (
            <div>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-secondary" onClick={() => this.onClick("bar")}>Słupkowy</button>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-secondary" onClick={() => this.onClick("doughnut")}>Kołowy</button>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-secondary">Nie wiem jeszcze</button>
                </div>
                {this.chart}
            </div>
        )
    }
}

Charts.propTypes = {
    getFailures: PropTypes.func.isRequired,
    failures: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    failures: state.failure.failures
});

export default connect(mapStateToProps, { getFailures })(Charts);