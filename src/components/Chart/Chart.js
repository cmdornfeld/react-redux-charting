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
            categories: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
            series: [
                {
                    name: this.props.info['Meta Data'],
                    data: [180, 184, 190],
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
            <>
            {JSON.stringify(this.props.info['Meta Data'])};
            <AreaChart data={data} options={options} style={containerStyle} />
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    info: reduxStore.chartReducer
})

export default connect(putReduxStateOnProps)(Chart);