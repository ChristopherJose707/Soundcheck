import React from 'react'
import WaveSurfer from 'wavesurfer.js'

class Waveform extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform" + this.props.index,
      backend: "WebAudio",
      height: 80,
      progressColor: "#ff5500",
      scrollParent: true,
      fillParent: true,
      minPxPerSec: 1,
    });
    this.waveform.load(this.props.song.songUrl)
    
  }

  render() {
    return (

    <div id={`waveform${this.props.index}`} className="waveform">

    </div>
    )
  }
}

export default Waveform