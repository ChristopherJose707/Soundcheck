import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

import {receiveErrors} from "./error_actions";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then( 
            user => (dispatch(receiveCurrentUser(user))), 
            errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
)

export const login = user => dispatch => (
    APIUtil.login(user).then( 
            user => (dispatch(receiveCurrentUser(user))), 
            errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
    
);


export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

