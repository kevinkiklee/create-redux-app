import { RECEIVE_DATA } from '../actions/dataActions';

const initialState = {};

const DataReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, state, action.texts);

    default:
      return state;
  }
};

export default DataReducer;
