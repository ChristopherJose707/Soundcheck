import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import PlayContainer from '../music_player/play_container';

class Waveform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timeElapsed: 0
    }

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidUpdate(prevProps) {
    const player = document.getElementById("audio");
    
    if(this.props.playing && this.props.currentSongId === this.props.song.id) {
      this.waveform.play(player.currentTime);
    }
    
    if (
      (!this.props.playing &&
        this.props.currentSongId === this.props.song.id) ||
      (this.props.playing && this.props.currentSongId !== this.props.song.id)
    ) {
      this.waveform.pause();
      // this.setState({timeElapsed: })
      // console.log(this.waveform.getCurrentTime());
    }
    
  }

  componentDidMount() {
    const player = document.getElementById("audio");
    
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
    this.waveform.on("seek", (prog) => {
      // console.log("Waveform currentTime: " + this.waveform.getCurrentTime())
      // console.log(prog * this.waveform.getDuration())
      player.currentTime = prog * this.waveform.getDuration();
    })
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