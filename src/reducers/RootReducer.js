import { combineReducers } from 'redux';
import DataReducer from './DataReducer';

const RootReducer = combineReducers({
  data: DataReducer
});

export default RootReducer;
