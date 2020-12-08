import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ERRORS, RECEIVE_ERROR, CLEAR_ERRORS} from '../actions/error_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_ERROR:
            let nextState = state.slice();
            nextState.push(action.error);
            return nextState;
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;
