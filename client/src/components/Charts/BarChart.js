import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data) {
           this.setData(nextProps);
        }
    }

    setData(props) {
        return props.data || this.props.data;
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