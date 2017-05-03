import * as fetchUtil from '../utils/fetchUtil';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data
});

export const fetchData = (url) => dispatch => (
  fetchUtil.fetchJSON(url).then((data) => dispatch(receiveData(data)))
);
