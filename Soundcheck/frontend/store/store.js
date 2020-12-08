import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const thunk = ({ dispatch, getState }) => next => action => {
    
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};


const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;