import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const apiKey = process.env.REACT_APP_API_KEY;

function* getChartSaga(){
    try{
        const getResponse = yield axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MMM&apikey=${apiKey}`);
        yield put({ type: 'SET_CHART_INFO', payload: getResponse.data})
    }
    catch(error){
        console.log(`Error getting chart info, error = ${error}`);
    }
}

function* getChartInfo(){
    yield takeLatest('GET_CHART_INFO', getChartSaga);
}

export default getChartInfo;