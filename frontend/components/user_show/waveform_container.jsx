import Waveform from './waveform';
import {connect} from 'react-redux';

const mSTP = state => {
  return {
    playing: state.ui.musicPlayer.playing,
    currentSongId: state.ui.musicPlayer.currentSongId
  };
}

export default connect(mSTP, null)(Waveform)