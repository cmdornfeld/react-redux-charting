// rootReducer created for ease of adding additional reducers
// in the future
import { combineReducers } from 'redux';
import chartReducer from './chartReducer';


const rootReducer = combineReducers({
    chartReducer
});

export default rootReducer;