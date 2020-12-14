import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';

class SongShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: "Like",
            followed: "Follow",
        }
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);

    }

    render () {
        const {users, song, artist, currentUser} = this.props;

        return (
            <div className="song-show-page">
                <NavbarContainer />
                <div className="song-banner">
                    {/* <span className="song-show-play"><PlayButtonContainer songId={song.id} /></span> */}
                    <span><Link to={`users/${artist.id}`}></Link></span>
                    
                </div>
            </div>

            
        )
    }
}

export default SongShow;