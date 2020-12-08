import {connect} from 'react-redux';
import {signup, login} from '../../actions/session_actions';
import SignupForm from './signup_form';
import {closeModal} from '../../actions/modal_actions';
import {receiveErrors, 
        receiveError, 
        clearErrors} from '../../actions/error_actions';


const mSTP = (state) => {
    return ({
        errors: state.errors.sessionErrors
    })
};

const mDTP = dispatch => {
    return ({
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        receiveError: (error) => dispatch(receiveError(error)),
        clearErrors: () => dispatch(clearErrors())
    })
};

export default connect(mSTP, mDTP)(SignupForm);