import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';
import uploadTime from '../../util/upload_time_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SongShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: "Like",
            followed: "Follow",
        }
        this.handleFileClick = this.handleFileClick.bind(this);

    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
        scrollTo(0, 0);

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
  }

    render () {
        const {users, song, artist, currentUser} = this.props;

        const songPhoto = song.photoUrl ? 
            <img className="song-show-photo" src={song.photoUrl} /> : null

        // Conditional Buttons
        const uploadPhotoButton = artist !== currentUser ? 
            null : !song.songPhoto && artist === currentUser ? 
            <button className="upload-photo" onClick={this.handleFileClick}>
                <FontAwesomeIcon icon="camera"/>Upload Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </button> 
            : 
             <button className="upload-photo" onClick={this.handleFileClick}>
                <FontAwesomeIcon icon="camera"/>Update Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </button> 

        return (
            <div className="song-show-page">
                <NavbarContainer />
                <div className="song-banner">
                    {/*  INSERT PLAY BUTTON HERE */}
                    <h2 className="song-banner-artist"><Link to={`users/${artist.id}`}>{artist.display_name}</Link></h2>
                    <h3 className="song-banner-created-at">{uploadTime(song.created_at)}</h3>
                    <h1 className="song-banner-title">{song.title}</h1>
                    <h3 className="song-banner-genre">#{song.genre}</h3>
                    <div className="song-banner-photo">{songPhoto}{uploadPhotoButton}</div>
                </div>
            </div>

            
        )
    }
}

export default SongShow;