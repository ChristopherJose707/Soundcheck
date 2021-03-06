import {connect} from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {

    return ({
        currentUser: state.entities.users[state.session.currentUser]
        
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));