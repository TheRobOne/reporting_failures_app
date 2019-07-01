import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

    render() {
        const data = {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec'],
            datasets: [
                {
                    label: 'Liczba usterek w miesiącu',
                    backgroundColor: '#009688',
                    borderColor: '#455A64',
                    borderWidth: 1,
                    hoverBackgroundColor: '#009688',
                    hoverBorderColor: '#455A64',
                    data: this.props.data
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