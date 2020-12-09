import { connect } from 'react-redux';
import Splash from './splash';
import {openModal} from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        user: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(Splash);