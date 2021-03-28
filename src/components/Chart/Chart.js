import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, BarChart, ColumnChart, LineChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';


class Chart extends Component {

    state = {
        chartType: 'area'
    }

    // dispatch action on page load to get the initial info for chart
    componentDidMount(){
        this.props.dispatch({type: 'GET_CHART_INFO'});
    }

    // function to update local state with the type of chart being viewed
    handleChartTypeChange = (chartSelection) => {
        this.setState({
            chartType: chartSelection
        });
    }

    render(){

        // null check to ensure reducer info is loaded prior to assigning to variables
        if (!this.props.info || !this.props.info['Meta Data'] || !this.props.info['Monthly Time Series']){
            return null;
        }

        const tickerSymbol = this.props.info['Meta Data']['2. Symbol'];
        
        // limit the data points to 12 most current months and reversing the order - oldest to newest 
        const dates = Object.keys(this.props.info['Monthly Time Series']).slice(0, 12).reverse();

        // convert string response from API to number for each data point being charted
        const tickerValues = dates.map(date => Number(this.props.info['Monthly Time Series'][date]['4. close']));


        // start of chart info
        const data = {
            categories: dates,
            series: [
                {
                    name: tickerSymbol,
                    data: tickerValues
                }
            ]
        }

        const options = this.state.chartType === 'bar' ? {
            chart: { 
                width: '60%',
                height: 600,
            },
            yAxis: {
                title: 'Month'
            },
            xAxis: {
                title: 'Price'
            }
        } : {
            chart: { 
                width: '60%',
                height: 600,
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
        // end of chart info

        // function for handling switching which chart type to display
        const chart = () => {
            switch(this.state.chartType){
                case 'area':
                    return <AreaChart data={data} options={options} style={containerStyle}/>
                case 'bar':
                    return <BarChart data={data} options={options} style={containerStyle}/>
                case 'column':
                    return <ColumnChart data={data} options={options} style={containerStyle} />
                case 'line':
                    return <LineChart data={data} options={options} style={containerStyle}/>
                default:
                    <AreaChart data={data} options={options} style={containerStyle} />
            }
        }

        return (
            <>
                {chart()}
                <h3>Click on the chart type you wish to display</h3>
                <button onClick={()=> this.handleChartTypeChange('area')}>Area</button>
                <button onClick={()=> this.handleChartTypeChange('bar')}>Bar</button>
                <button onClick={()=> this.handleChartTypeChange('column')}>Column</button>
                <button onClick={()=> this.handleChartTypeChange('line')}>Line</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    info: reduxStore.chartReducer
})

export default connect(putReduxStateOnProps)(Chart);