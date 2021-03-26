import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';


class Chart extends Component {
    componentDidMount(){
        console.log('componentDidMount?');
        this.props.dispatch({type: 'GET_CHART_INFO'});
    }

    render(){

        const data = {
            categories: ['Jan', 'Feb', 'Mar'],
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
            chart: { 
                width: '60%',
                height: 600,
                title: 'Monthly Stock Prices' 
            },
            yAxis: {
                title: 'Price'
            },
            xAxis: {
                title: 'Month'
            }
        }

        const containerStyle = {
            width: '90%',
            height: '90%',
          };

        return (
            <AreaChart data={data} options={options} style={containerStyle} />
        );
    }
}

export default connect()(Chart);