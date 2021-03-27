import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, BarChart, LineChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';


class Chart extends Component {

    state = {
        chartType: 'area'
    }
    // componentDidMount(){
    //     console.log('componentDidMount?');
    //     this.props.dispatch({type: 'GET_CHART_INFO'});
    // }

    handleChartTypeChange = (chartType) => {
        this.setState({
            chartType: chartType
        });
    }

    render(){

        const tickerSymbol = this.props.info['Meta Data'] ? this.props.info['Meta Data']['2. Symbol']
            : null;

        const data = {
            categories: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
            series: [
                {
                    name: tickerSymbol,
                    data: [164,168,166,174,172,176,176,180,184,190]
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

        const chart = () => {
            switch(this.state.chartType){
                case 'area':
                    return <AreaChart data={data} options={options} style={containerStyle}/>
                case 'bar':
                    return <BarChart data={data} options={options} style={containerStyle}/>
                case 'line':
                    return <LineChart data={data} options={options} style={containerStyle}/>
                default:
                    <AreaChart data={data} options={options} style={containerStyle} />
            }
        }

        return (
            <>
            {JSON.stringify(this.props.info)};
            {chart()}
            <button onClick={()=> this.handleChartTypeChange('area')}>Area</button>
            <button onClick={()=> this.handleChartTypeChange('bar')}>Bar</button>
            <button onClick={()=> this.handleChartTypeChange('line')}>Line</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    info: reduxStore.chartReducer
})

export default connect(putReduxStateOnProps)(Chart);