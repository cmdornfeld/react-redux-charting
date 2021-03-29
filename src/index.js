import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger'; // used for testing
import App from './components/App/App';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';


const sagaMiddleware = createSagaMiddleware();

// const middlewareList = process.env.NODE_ENV === 'development' ?
//   [sagaMiddleware, logger
//   ] :
//   [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
