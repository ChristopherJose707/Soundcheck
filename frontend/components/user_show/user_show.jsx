import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PlayContainer from '../music_player/play_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {uploadTime} from '../../util/upload_time_util';
import {Link} from 'react-router-dom';


class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.handlePhotoFileProfileBanner = this.handlePhotoFileProfileBanner.bind(this);
        this.handlePhotoFileProfilePic = this.handlePhotoFileProfilePic.bind(this);
        this.songList = this.songList.bind(this);
    }

    componentDidMount(){
        scrollTo(0,0);
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUserSongs(this.props.match.params.userId);
    }

    handlePhotoFileProfilePic(e) {
        e.preventDefault();
        const {user} = this.props;
        const file = e.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('user[profile_picture]', file);
            this.props.updateUser(formData, user.id)
        }
    }

    handlePhotoFileProfileBanner(e) {
        e.preventDefault();
        const {user} = this.props;
        const file = e.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('user[profile_banner]', file);
            this.props.updateUser(formData, user.id)
        }
    }

   songList() {
       const {user, userSongs} = this.props;
       const songList = Object.values(userSongs).map((song, i) => {
           return(
               <div key={i} className="profile-song-item">
                        <div className="profile-song-art">
                            <Link to={`/song/${song.id}`}>
                                {song.songPhoto ? <img className="profile-song-img" src={song.songPhoto} /> : null}
                            </Link>
                        </div>
                        <div className="profile-song-main">
                            <div className="profile-song-header">
                                <PlayContainer songId={song.id} />
                                <div className="profile-song-info-top">
                                    <li>
                                        <Link to={`/users/${user.id}`}><p className="profile-song-artist">{user.display_name}</p></Link>
                                    </li>
                                    <li>{uploadTime(song.created_at)}</li>
                                </div>
                                <div className="profile-song-info-bottom">
                                    <li><Link to={`/song/${song.id}`}>{song.title}</Link> </li>
                                    <li>#{song.genre}</li>
                                </div>
                                <div className="waveform"></div>
                                <div className="profile-song-footer">
                                    <button className="profile-song-like">
                                        <FontAwesomeIcon icon="heart"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
           )
       });
       return songList;
   }

    render(){
        if (!this.props.user || !this.props.userSongs) {
            return null;
        }

        const {user, currentUser } = this.props;

        const uploadProfilePicButton = user !== currentUser ?
            null : !user.songPhoto && user === currentUser ? 
                <label className="profile-photo-label">
                    <FontAwesomeIcon icon="camera" />
                    Upload Profile Image
                    <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFileProfilePic}/>
                </label> 
                : <label className="profile-photo-label">
                    <FontAwesomeIcon icon="camera" />
                    Update Image
                    <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFileProfilePic}/>
                </label> ;

        const uploadProfileBannerButton = user !== currentUser ?
            null : !user.songPhoto && user === currentUser ? 
                <label className="profile-banner-label">
                    <FontAwesomeIcon icon="camera" />
                    Upload Banner Image
                    <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFileProfileBanner}/>
                </label> 
                : <label className="profile-banner-label">
                    <FontAwesomeIcon icon="camera" />
                    Update Image
                    <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFileProfileBanner}/>
                </label> ;

        return(

            <div>
                <NavbarContainer/>
                <div className="profile-main">
                    <div className="profile-top">
                        <div className="user-info">
                            <li>{user.display_name}</li>
                            {user.profilePicture ? <img className="profile-pic-top" src={user.profilePicture} /> : null}
                            {user.profileBanner ? <img className="profile-banner-top" src={user.profileBanner} /> : null}
                            
                        </div>
                        <li className="profile-banner-button">{uploadProfileBannerButton}</li>
                        <li className="profile-pic-button">{uploadProfilePicButton}</li>
                    </div>
                    <div className="profile-main">
                        <div className="profile-header">
                            <li>All</li>
                            <button>Edit</button>
                        </div>
                        <div className="profile-recent-songs">
                            <div className="recent">Recent</div>
                            <div className="recent-songs-list">
                                {this.songList()}
                            </div>
                        </div>
                        <div className="profile-right-panel">
                            <div className="profile-right-panel-content">
                                <div className="profile-stats">
                                    <span>
                                        <h2>Followers</h2>
                                        <p>100</p>
                                    </span>
                                    <span>
                                        <h2>Following</h2>
                                        <p>64</p>
                                    </span>
                                    <span>
                                        <h2>Tracks</h2>
                                        <p>6</p>
                                    </span>
                                </div>
                                <div className="profile-bio">
                                    <span>{user.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;