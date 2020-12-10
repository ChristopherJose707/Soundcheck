import { connect } from 'react-redux';
import Discover from './discover'
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
    console.log("in discover container")
    console.log(state)
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
        // songs:    uncomment once songs is added
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);