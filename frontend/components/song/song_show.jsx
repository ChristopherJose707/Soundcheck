import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';
import {uploadTime} from '../../util/upload_time_util';
import PlayContainer from '../music_player/play_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Play from '../music_player/play';

class SongShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: "Like",
            followed: "Follow"
        }
        this.handleFileClick = this.handleFileClick.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
            
    }

    handleFileClick() {
        document.getElementById("file").click();
    }

    handlePhotoFile(e) {
        e.preventDefault();
        const { song } = this.props;
        const file = e.target.files[0];
    
        if (file) {
            const formData = new FormData();
            formData.append('song[photo]', file);
            this.props.updateSong(formData, song.id)
        }
    };

    handleDropdown() {
        document.getElementById("show-dropdown-id").classList.toggle("show")
    }

    handleDelete() {
        this.props.removeSong(this.props.match.params.songId);
        this.props.history.push("/discover");
    }

    render () {
        const {users, song, currentUser} = this.props;
        
        if (!this.props.song) {
            return null
        };

        const songPhoto = song.songPhoto ? 
            <img className="song-show-photo" src={song.songPhoto} /> : null

        // Conditional Buttons
        const uploadPhotoButton = (song.artist !== currentUser.display_name) ? 
            null : !song.songPhoto && song.artist === currentUser.display_name ? 
            <button className="upload-photo" onClick={this.handleFileClick}>
                <FontAwesomeIcon icon="camera"/>Upload Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </button> 
            : 
             <button className="upload-photo" onClick={this.handleFileClick}>
                <FontAwesomeIcon icon="camera"/>Update Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </button> ;

        const deleteButton = (song.artist !== currentUser.display_name) ? null 
            : <button className="song-delete" onClick={() => this.handleDelete()}>Delete Track</button>

        return (
            <div className="song-show-page">
                <NavbarContainer />
                <div className="song-banner">
                    <PlayContainer songId={song.id} />
                    <h2 className="song-banner-artist"><Link to={`users/${song.user_id}`}>{song.artist}</Link></h2>
                    <h3 className="song-banner-created-at">{uploadTime(song.created_at)}</h3>
                    <h1 className="song-banner-title">{song.title}</h1>
                    <h3 className="song-banner-genre">#{song.genre}</h3>
                    <div className="song-banner-photo">{songPhoto}{uploadPhotoButton}</div>
                </div>
                <div className="song-show-buttons">
                    <button>Like</button>
                    <button>Repost</button>
                    <span className="show-dropdown">
                        <button onClick={() => this.handleDropdown()} className="dropbtn">More<FontAwesomeIcon className="song-show-ellipsis" icon="ellipsis-h" /></button>
                        <ul id="show-dropdown-id" className="show-dropdown-content">
                            {deleteButton}
                            <li>Nothing here yet!</li>
                        </ul>
                    </span>
                </div>
            </div>
            
        )
    }
}

export default SongShow;