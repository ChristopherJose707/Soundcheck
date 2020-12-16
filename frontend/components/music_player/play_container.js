import { connect } from 'react-redux';
import Play from './play';
import {receiveCurrentSong, receivePreviousSong, playSong, pauseSong} from '../../actions/music_player_actions';

const mapStateToProps = state => {
    return ({
        currentSong: state.entities.songs[state.ui.musicPlayer.currentSongId],
        playing: state.ui.musicPlayer.playing
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
        receivePreviousSong: (songId) => dispatch(receivePreviousSong(songId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Play)