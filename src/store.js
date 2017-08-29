import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {createLogger} from 'redux-logger';
const ReduxThunk = require('redux-thunk').default;

import rootReducer from './reducers/index';

const initialState = {
  channels: {
    subscribed: [],
    unsubscribed: []
  }
}

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk, createLogger()))
);

export default store;