import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoginForm from './login_form';
import {login} from '../../actions/session_actions';
import {closeModal} from '../../actions/modal_actions';
import {receiveErrors, 
        receiveError, 
        clearErrors} from '../../actions/error_actions';


const mapStateToProps = (state) => {
    return {
        errors: state.errors.sessionErrors,
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        receiveError: (error) => dispatch(receiveError(error)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))