import {connect} from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    console.log("in navbar container")
    console.log(state)
    return ({
        currentUser: state.entities.users[state.session.id]
        // currentUser:  ownProps.currentUser
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);