import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {channelsReducer} from './channelsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  channels: channelsReducer
});

export default rootReducer;