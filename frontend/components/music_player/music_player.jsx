import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {formatTime} from '../../util/player_time_util';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            elapsedTime: 0,
            songDuration: 0,
            volume: 0.5,
            mutedVolume: 0.0,
            hoverVolume: false
        }

        this.handleMetaData = this.handleMetaData.bind(this);
        this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
        this.handleNextSong= this.handleNextSong.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidUpdate() { /// remove receiveCurrentSong once testing is done
        if (this.props.randomSongs.length > 0) {
            return null
        } else {
            this.props.receiveRandomSongs(this.props.songs)
            this.props.receiveCurrentSong(this.props.songs[7].id)
        }
    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    handleVolume(e) {
        const player = document.getElementById("audio");
        player.volume = e.target.value / 1000.0;
        this.setState({volume: e.target.value / 1000.0})
    }

    handleNextSong() {

    }

    handleSkip() {

    }

    handleMetaData() {
        const player = document.getElementById("audio");
        this.setState({songDuration: player.duration})
    }

    handleTimeElapsed() {
        const player = document.getElementById("audio");
        const scroll = document.getElementById("scrollbar")

        if (!player.paused) {
            setInterval(() => {
                scroll.value = player.currentTime;
                this.setState({elapsedTime: player.currentTime})
            }, 50)
        }
    }

    handleMute() {

    }

    handleBack(){

    }

    handlePlay(){
        const player = document.getElementById("audio");
        if(this.props.playing) {
            this.props.pauseSong();
            player.pause();
        } else {
            this.props.playSong();
            player.play();
        }
    }

    handleNext(){

    }

    render() {
        if(!this.props.songs || !this.props.randomSongs) {
            return null
        }

        const {currentSong, playing} = this.props;
        let songUrl;
        let volumeIcon;
        
        if (currentSong) {
            const player = document.getElementById("audio");
            songUrl = currentSong.songUrl;
            if (player.volume > 0.5) {
                volumeIcon = <FontAwesomeIcon icon="volume-up" onClick={this.handleMute}/>
            } else if (player.volume < 5 && player.volume !== 0) {
                volumeIcon = <FontAwesomeIcon icon="volume-down" onClick={this.handleMute} />
            } else {
                volumeIcon = <FontAwesomeIcon icon="volume-mute" onClick={this.handleMute} />
            }
        }

        const musicPlayer =  currentSong ?

        <div className="music-player">
            <div className="player-buttons">
                <button className="player-back" onClick={this.handleBack}><FontAwesomeIcon icon="step-backward"/></button>
                <button className="player-play" onClick={this.handlePlay}>{ playing ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play"/>}</button>
                <button className="player-next" onClick={this.handleNext}><FontAwesomeIcon icon="step-forward"/></button>
            </div>
            <div className="time-scroll">
                <p className="current-song-time">{formatTime(this.state.elapsedTime)} </p>
                <input id="scrollbar" 
                    className="scrollbar" 
                    type="range" 
                    min="0" 
                    max={this.state.songDuration}
                    onInput={this.handleSkip}
                    />
                <p className="total-song-time">{formatTime(this.state.songDuration)}</p>
            </div>
            <div className="volume"
                onMouseEnter={() => this.setState({hoverVolume: true})}
                onMouseLeave={() => this.setState({hoverVolume: false})}>
                <button>
                    {this.state.hoverVolume ?
                        <div className="volume-slider" onMouseEnter={() => this.setState({hoverVolume: true})}>
                            <input type="range"
                                className="volume-slider-input"
                                min="0.0"
                                defaultValue={this.state.volume * 1000}
                                max="1000.0"
                                onChange={this.handleVolume}
                            />
                        </div> : null
                    }
                    {volumeIcon}
                </button>
            </div>
            <div className="player-right">
                <Link className="player-art" to={`/song/${currentSong.id}`}>
                    {currentSong.songPhoto ? <img src={currentSong.songPhoto}/> : null}
                </Link>
                <div className="player-title-artist">
                    <Link className="player-artist" to={`/users/${currentSong.user_id}`}>{currentSong.artist}</Link>
                    <Link className="player-title" to={`/song/${currentSong.id}`}>{currentSong.title}</Link>
                </div>
            </div>
        </div>

        : null ;
        
        return (
            <div>
                <audio id="audio" 
                        src={songUrl}
                        controls
                        onLoadedMetadata={this.handleMetaData}
                        onPlaying={this.handleTimeElapsed}
                        onEnded={this.handleNextSong}
                />
                {musicPlayer}
            </div>
        )
    }
}

export default MusicPlayer;