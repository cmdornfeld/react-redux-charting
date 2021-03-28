import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const apiKey = process.env.REACT_APP_API_KEY;

function* getChartSaga(){
    try{
        const getResponse = yield axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MMM&apikey=${apiKey}`);
        yield put({ type: 'SET_CHART_INFO', payload: getResponse.data});
    }
    catch( error ){
        console.log(`Error getting chart info, error = ${error}`);
    }
}

function* searchNewTicker(action){
    try{
        const getResponse = yield axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${action.payload}&apikey=${apiKey}`);
        if ( getResponse.data['Error Message'] ) {
            alert(`Invalid ticker symbol.  Please try again.`);
            getChartSaga();
        } else {
            yield put({type: 'SET_CHART_INFO', payload: getResponse.data});
        }
    }
    catch( error ){
        console.log(`Error searching new ticker, error = ${error}`);
    }
}

function* getChartInfo(){
    yield takeLatest('GET_CHART_INFO', getChartSaga);
    yield takeLatest('SEARCH_NEW_TICKER', searchNewTicker);
}

export default getChartInfo;