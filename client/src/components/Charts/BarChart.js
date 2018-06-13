import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            failures: {},
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
            december: 0,
            data: []
        }
    }

    getFailuresForEachMonth(failure){
        let date = new Date(failure[0].date);
        let month = date.getMonth();
        console.log(date +  "  " + month)
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
                this.setState(prevState => {
                    return {june: prevState.june + 1}
                });
                break;
        }
    }

    

    static getDerivedStateFromProps(props, state) {
        const failures = props.failures;
        console.log("failures")
        Object.values(failures).map(failure => {
            return this.getFailuresForEachMonth(failure);
        });
        this.setState({data: [this.state.january, this.state.february, this.state.march, this.state.april, this.state.may, this.state.june]})
    }



    componentWillReceiveProps() {
        this.setState({failures: this.props.failures})
        // const failures = this.props.failures;
        // console.log(failures)
        // Object.values(failures).map(failure => {
        //     return this.getFailuresForEachMonth(failure);
        // });
        // this.setState({data: [this.state.january, this.state.february, this.state.march, this.state.april, this.state.may, this.state.june]})
    }

    render() {
        const data = {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec'],
            datasets: [
                {
                    label: 'Liczba usterek w poszczególnych miesiącach',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.state.data
                }
            ]
        };
        return (
            <div>
                <Bar
                    data={data}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default BarChart;