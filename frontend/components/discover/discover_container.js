import { connect } from 'react-redux';
import Discover from './discover'

const mapStateToProps = state => {
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.currentUser]
        // songs:    uncomment once songs is added
    })
};

export default connect(mapStateToProps)(Discover);