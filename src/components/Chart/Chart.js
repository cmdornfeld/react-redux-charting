import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart } from '@toast-ui/chart';

const el = document.getElementById('chart');

const data = {
    catagories: ['Jan', 'Feb', 'Mar'],
    series: [
        {
            name: 'MMM',
            data: [180, 184, 190],
        },
        {
            name: 'EPD',
            data: [20, 21, 22]
        }
    ]
}

const options = {
    chart: { width: 700, height: 400 }
}

const chart = new AreaChart({el, data, options});

class Chart extends Component {
    // componentDidMount(){
    //     this.props.dispatch({type: 'GET_CHART_INFO'});
    // }

    render(){
        return (
            <div id="chart">

            </div>
        );
    }
}

export default Chart;