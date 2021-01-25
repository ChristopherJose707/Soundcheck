import React from 'react'
import WaveSurfer from 'wavesurfer.js'


class Waveform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const scroll = document.getElementById("scrollbar");

    this.waveform.pause();
    this.waveform.seekTo(scroll.value / this.waveform.getDuration());
    this.waveform.play();
  }

  componentDidUpdate() {
    const player = document.getElementById("audio");
    const scroll = document.getElementById("scrollbar");
    if (scroll && this.props.currentSongId === this.props.song.id) {
      scroll.addEventListener("click", this.handleScroll)
    }

    if (scroll && this.props.currentSongId !== this.props.song.id) {
      scroll.removeEventListener("click", this.handleScroll)
    }

    if(this.props.playing && this.props.currentSongId === this.props.song.id) {
      this.waveform.play(player.currentTime);
    }
    
    if (
      (!this.props.playing &&
        this.props.currentSongId === this.props.song.id) ||
      (this.props.playing && this.props.currentSongId !== this.props.song.id)
    ) {
      this.waveform.pause();
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

    this.waveform.on("loading", (integer) => {
      this.setState({loading: integer})
    })

    this.waveform.on("ready", () => {
      if(this.props.playing && this.props.currentSongId === this.props.song.id) {
        this.waveform.play(player.currentTime)
      }
    })
    this.waveform.on("seek", (prog) => {
      player.currentTime = prog * this.waveform.getDuration();
    })
  }

  render() {
    return (
      <div>
        <h1 className={this.state.loading === 100 ? "hide" : ""}>Loading: {this.state.loading}</h1>
        <div id={`waveform${this.props.index}`} className="waveform"></div>
      </div>
    );
  }
}

export default Waveform