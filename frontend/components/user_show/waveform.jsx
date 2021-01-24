import React from 'react'
import WaveSurfer from 'wavesurfer.js'


class Waveform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerTime: null
    }

    
  }

  componentDidUpdate(prevProps) {
    const player = document.getElementById("audio");
    const scroll = document.getElementById("scrollbar");
    if (scroll && this.props.currentSongId === this.props.song.id) {
      scroll.addEventListener("click", () => {
        // console.log(player.currentTime)
        // console.log(`Scroll Value: ${scroll.value}`)
        this.waveform.pause();
        this.waveform.play(scroll.value);
      });
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
    this.waveform.on("seek", (prog) => {
      // console.log("Waveform currentTime: " + this.waveform.getCurrentTime())
      // console.log(prog * this.waveform.getDuration())
      
      player.currentTime = prog * this.waveform.getDuration();
      
    })

    
  
  }

  

  render() {
    
    return (
      <div>
        <div id={`waveform${this.props.index}`} className="waveform"></div>
      </div>
    );
  }
}

export default Waveform