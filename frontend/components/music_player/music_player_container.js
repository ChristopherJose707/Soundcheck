import {connect} from 'react-redux';
import MusicPlayer from './music_player';
import {playSong, 
        pauseSong, 
        receiveCurrentSong, 
        receivePreviousSong, 
        receiveNextSong, 
        receiveRandomSongs} from '../../actions/music_player_actions';
import {fetchSongs} from '../../actions/song_actions';

const mapStateToProps = state => {
    return ({
        songs: state.entities.songs,
        currentSong: null,
        playing: state.ui.musicPlayer.playing,
        randomSongs: state.ui.musicPlayer.randomSongs
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
        receivePreviousSong: (songId) => dispatch(receivePreviousSong(songId)),
        receiveNextSong: (songId) => dispatch(receiveNextSong(songId)),
        receiveRandomSongs: (songs) => dispatch(receiveRandomSongs(songs)),
        fetchSongs: () => dispatch(fetchSongs())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);