import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";

const sessionReducer = (oldState = {currentUser: null}, action ) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return {currentUser: null};
        default:
            return oldState;
    }
}

export default sessionReducer;