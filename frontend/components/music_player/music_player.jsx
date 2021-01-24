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
            volume: 50,
            savedVolume: 0.0,
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

    componentDidUpdate() { 
        if (this.props.randomSongs.length > 0) {
            return null
        } else {
            this.props.receiveRandomSongs(this.props.songs)
            // this.props.receiveCurrentSong(this.props.songs[7].id)
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

    handleNextSong() { // auto play next song in queue after song end 
        this.props.receivePreviousSong(this.props.currentSong);
        this.props.receiveCurrentSong(this.props.randomSongs.shift());
        this.handlePlay()
        this.setState({elapsedTime: 0})
    }

    handleSkip(e) { // Song skimming on song scrollbar
        const player = document.getElementById("audio");
        player.currentTime = e.target.value;
        this.setState({elapsedTime: e.target.value});
        
    }

    handleMetaData() { // Set duration once song loads
        const player = document.getElementById("audio");
        this.setState({songDuration: player.duration})
    }

    handleTimeElapsed() { 
        const player = document.getElementById("audio");
        const scroll = document.getElementById("scrollbar")
        
        if (!player.paused) {
            setInterval(() => { // update currentTime every 50ms
                scroll.value = player.currentTime;
                this.setState({elapsedTime: player.currentTime})
            }, 50)
        }
    }

    handleMute() {
        const player = document.getElementById("audio");
        const volume = document.getElementById("volume")

        if (player.volume > 0) { // save current volume to savedVolume, then mute
            this.setState({volume: 0, savedVolume: player.volume});
            player.volume = 0;
            volume.value = 0;
        } else { // unmute by re-applying volume.value using savedVolume
            this.setState({volume: this.state.savedVolume});
            player.volume = this.state.savedVolume;
            volume.value = this.state.savedVolume * 1000.0;
        }
    }

    handleBack(){ // Play previous played or start song at 0seconds
        const player = document.getElementById("audio");
        if(player.currentTime < 6 && this.props.played.length > 0) {
            this.props.receiveNextSong(this.props.currentSong.id);
            this.props.receiveCurrentSong(this.props.played.pop());
            setTimeout(() => {player.play(), 100})
            this.setState({elapsedTime: 0});
        } else {
            player.currentTime = 0;
            this.props.playSong();
            player.play();
            this.setState({elapsedTime: 0});
        }
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

    handleNext(){ // Play next song on button click
        const player = document.getElementById("audio");
        this.props.receivePreviousSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.randomSongs.shift());
        player.currentTime = 0;
        this.props.playSong();
        setTimeout(() => {player.play(), 100})
        this.setState({elapsedTime: 0})
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
        <div className="music-player-parent">
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
                                    id="volume"
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