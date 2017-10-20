import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    diff: true,
    collapsed: true,
  })

  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
