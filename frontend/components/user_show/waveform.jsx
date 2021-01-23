import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import PlayContainer from '../music_player/play_container';

class Waveform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false
    }

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if(this.props.playing && this.props.currentSongId === this.props.song.id) {
      this.waveform.play()
    } 
    
  }

  componentDidMount() {
    
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform" + this.props.index,
      backend: "WebAudio",
      height: 80,
      progressColor: "#ff5500",
      fillParent: true,
      minPxPerSec: 1,
    });
    this.waveform.load(this.props.song.songUrl)
    this.waveform.setVolume(0);
  }

  handlePlay() {
    this.waveform.playPause()
  }

  render() {
    return (
      <div>
        <PlayContainer songId={this.props.song.id} onClick={this.handlePlay}/>
        <div id={`waveform${this.props.index}`} className="waveform"></div>
      </div>
    );
  }
}

export default Waveform