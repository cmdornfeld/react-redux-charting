import { all } from 'redux-saga/effects';
import chartSaga from './chartSaga';

function* rootSaga(){
    yield all([
        chartSaga()
    ]);
}

export default rootSaga;