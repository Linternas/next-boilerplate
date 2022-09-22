import { combineReducers } from 'redux';
import example from './example';
import counter from './counter';

export default combineReducers({
  example,
  counter
});
