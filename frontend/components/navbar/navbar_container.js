import {connect} from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.id] 
    })
};

const mapDispatchToProps = state => {
    return ({
        logout: () => dispatch(logout())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);