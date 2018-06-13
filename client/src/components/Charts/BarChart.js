import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
<<<<<<< HEAD
=======
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
>>>>>>> 23c71384a01379ec65241997514415801fc3223e

    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data) {
           this.setData(nextProps);
        }
    }

<<<<<<< HEAD
    setData(props) {
        return props.data || this.props.data;
=======
    

    static getDerivedStateFromProps(props, state) {
        const failures = props.failures;
        console.log("failures")
        Object.values(failures).map(failure => {
            return this.getFailuresForEachMonth(failure);
        });
        this.setState({data: [this.state.january, this.state.february, this.state.march, this.state.april, this.state.may, this.state.june]})
>>>>>>> 23c71384a01379ec65241997514415801fc3223e
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
        console.log(this.props.data)
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
                    data: this.setData(this.props)
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