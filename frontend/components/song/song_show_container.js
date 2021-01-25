import { connect } from 'react-redux';
import SongShow from './song_show';
import { removeSong, fetchSong, updateSong, fetchSongs} from '../../actions/song_actions';
import {fetchComments, createComment, deleteComment} from '../../actions/comment_actions';
import {fetchUsers} from '../../actions/user_actions';
import { fetchUserLikes, deleteLike } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId];
    return ({
        users: state.entities.users, 
        song: song,   
        currentUser: state.entities.users[state.session.currentUser],
        comments: state.entities.songComments,
        userLikes: state.entities.userLikes
    })
};

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers()),
      fetchComments: () => dispatch(fetchComments()),
      createComment: (comment) => dispatch(createComment(comment)),
      deleteComment: (id) => dispatch(deleteComment(id)),
      fetchSongs: () => dispatch(fetchSongs()),
      removeSong: (songId) => dispatch(removeSong(songId)),
      fetchSong: (songId) => dispatch(fetchSong(songId)),
      updateSong: (songData, songId) => dispatch(updateSong(songData, songId)),
      fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
      deleteLike: (likeId) => dispatch(deleteLike(likeId)),
      createLike: (like) => dispatch(createLike(like)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
