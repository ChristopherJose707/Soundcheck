import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SignupForm from './signup_form';
import {closeModal} from '../../actions/modal_actions';
import {reciveErrors, 
        receiveError, 
        clearErrors} from '../../actions/error_actions';


const mSTP = (state) => {
    return ({
        errors: state.errors.session
    })
};

const mDTP = dispatch => {
    return ({
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        receiveError: (error) => dispatch(receiveError(error))
    })
};

export default connect(mSTP, mDTP)(SignupForm);