import { connect } from 'react-redux';
import SongShow from './song_show';
import { removeSong, fetchSong, updateSong, fetchSongs} from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId]
    debugger;
    return ({
        users: state.entities.users, 
        song: song,   
        // artist: state.entities.users[song.user_id],
        currentUser: state.entities.users[state.session.currentUser]
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        removeSong: songId => dispatch(removeSong(songId)),
        fetchSong: songId => dispatch(fetchSong(songId)),
        updateSong: (songData, songId) => dispatch(updateSong(songData, songId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
