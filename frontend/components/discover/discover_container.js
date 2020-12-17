import { connect } from 'react-redux';
import Discover from './discover'
import {fetchUsers} from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        songs: state.entities.songs
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchUsers: () => dispatch(fetchUsers())
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(Discover);