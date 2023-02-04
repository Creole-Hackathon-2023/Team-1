import { combineReducers } from 'redux';
import venuesReducer from './venus/venuesReducer';

const rootReducer = combineReducers({
  venuesReducer,
});

export default rootReducer;
