import { connect } from 'react-redux';
import SongShow from './song_show';
import { removeSong, fetchSong, updateSong} from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId]
    return ({
        users: state.entities.users,
        song: song,
        artist: state.entities.users[song.user_id],
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        removeSong: songId => dispatch(removeSong(songId)),
        fetchSong: songId => dispatch(fetchSong(songId)),
        updateSong: (songData, songId) => dispatch(updateSong(songData, songId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
