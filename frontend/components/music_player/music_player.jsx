import React from 'react';
import formatTime from '../../util/player_time_util';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            elapsedTime: 0,
            songDuration: 0,
            volume: 0.5,
            mutedVolume: 0.0
        }

        this.handleMetaData = this.handleMetaData.bind(this);
        this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
        this.handleNextSong= this.handleNextSong.bind(this);
    }

    componentDidUpdate() {
        if (this.props.randomSongs.length > 0) {
            return null
        } else {
            this.props.receiveRandomSongs(this.props.songs)
        }
    }

    componentDidMount() {
        this.props.fetchSongs();
        // this.props.receiveRandomSongs(this.props.songs)
    }

    handleNextSong() {

    }

    handleMetaData() {
        const player = document.getElementById("audio");
        this.setState({songDuration: player.duration})
    }

    handleTimeElapsed() {
        const player = document.getElementById("audio");
        
    }

    render() {
        if(!this.props.songs || !this.props.randomSongs) {
            return null
        }
        const {currentSong, playing} = this.props;
        let songUrl;

        if (currentSong) {
            songUrl = currentSong.songUrl
        }

        const musicPlayer = currentSong ? 

        <div className="music-player">
            <div className="player-buttons">
                <button></button>
                <button></button>
                <button></button>
            </div>
            <p className="current-song-time"> </p>
        </div>

    
        return (
            <div>
                <audio id="audio" 
                        src={songUrl}
                        controls
                        onLoadedMetaData={this.handleMetaData}
                        onPlaying={this.handleTimeElapsed}
                        onEnded={this.handleNextSong}
                />
            {musicPlayer}
            </div>
        )
    }
}

export default MusicPlayer;