import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Play extends React.Component {
    constructor(props) {
        super(props)

        this.handlePlay = this.handlePlay.bind(this);
    }

    handlePlay() {
        const player = document.getElementById("audio");
        if (this.props.playing && this.props.currentSong.id === this.props.songId) {
            this.props.pauseSong();
            player.pause();
        } else {
            this.props.receiveCurrentSong(this.props.songId);
            this.props.receivePreviousSong(this.props.songId);
            this.props.playSong();
            player.setAttribute("autoplay", "");  // set player with autoplay attribute ("" is empty value)
            setTimeout(() => {player.play(), 100})
        }
    }

    render() { // songId passed into props on <PlayContainer songId={song.id} /> in show page
        return (
            <button className="play-button" onClick={this.handlePlay}>
                {this.props.playing && this.props.currentSong.id === this.props.songId ?
                    <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play"/> }
            </button>
        )
    }
}

export default Play;