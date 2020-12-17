import { connect } from 'react-redux';
import Discover from './discover'

const mapStateToProps = (state) => {
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        songs: state.entities.songs
    })
};


export default connect(mapStateToProps, null)(Discover);