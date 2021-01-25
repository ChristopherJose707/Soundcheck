import { connect } from 'react-redux';
import UserShow from './user_show';
import { updateUser, fetchUser } from '../../actions/user_actions';
import {fetchUserSongs} from '../../actions/song_actions';
import {fetchUserLikes, deleteLike} from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    return ({
        user: user,
        userSongs: state.entities.songs,
        userLikes: state.entities.userLikes,
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        updateUser: (userData, userId) => dispatch(updateUser(userData,userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserSongs: (userId) => dispatch(fetchUserSongs(userId)),
        fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        createLike: like => dispatch(createLike(like))
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(UserShow);