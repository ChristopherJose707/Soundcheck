import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PlayContainer from '../music_player/play_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {uploadTime} from '../../util/upload_time_util';
import {Link} from 'react-router-dom';
import Waveform from './waveform';
import WaveformContainer from './waveform_container';


class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            liked: false
        }

        this.handlePhotoFileProfileBanner = this.handlePhotoFileProfileBanner.bind(this);
        this.handlePhotoFileProfilePic = this.handlePhotoFileProfilePic.bind(this);
        this.songList = this.songList.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.userLikesSongs = this.userLikesSongs.bind(this);
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            scrollTo(0,0);
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchUserSongs(this.props.match.params.userId);
        }
    }

    componentDidMount(){
        scrollTo(0,0);
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUserSongs(this.props.match.params.userId);
        this.props.fetchUserLikes(this.props.match.params.userId);
    }

    userLikesSongs() {
      let songIds = [];
      Object.values(this.props.userLikes).forEach(like => {
        songIds.push(like.song_id)
      })
      return songIds;
    }

    handleLike(songId) {
      const {currentUser, userLikes} = this.props;
      if (!this.userLikesSongs().includes(songId)) {
        let like = { user_id: currentUser.id, song_id: songId };
        this.props.createLike(like);
      } else {
        let likeId = null;
        Object.values(userLikes).forEach((like) => {
          if (like.song_id === songId) {
            likeId = like.id
          }
        })
        this.props.deleteLike(likeId)
      }
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
       const {userSongs} = this.props;
       
       const songArrFiltered = Object.values(userSongs).filter( song => song.user_id === this.props.user.id);
       if (songArrFiltered.length === 0) {
         return (
           <h1 className="no-songs">You have no songs. <Link className="no-songs-upload" to="/upload">Upload</Link> to add tracks to your page!</h1>
         )
       }

       const songList = songArrFiltered.map((song, i) => {
           return(
               <div key={i} className="profile-song-item">
                        <div className="profile-song-art">
                            <Link to={`/song/${song.id}`}>
                                {song.songPhoto ? <img className="profile-song-img" src={song.songPhoto} /> : <div className="profile-song-img empty-profile">&nbsp;</div>}
                            </Link>
                        </div>
                        <div className="profile-song-main">
                            <div className="profile-song-header">
                                <PlayContainer songId={song.id} />
                                <div className="profile-song-info">
                                    <div className="profile-song-info-top">
                                        <li>
                                            <Link to={`/users/${song.user_id}`}><p className="profile-song-artist">{song.artist}</p></Link>
                                        </li>
                                        <li>{uploadTime(song.created_at)}</li>
                                    </div>
                                    <div className="profile-song-info-bottom">
                                        <li><Link to={`/song/${song.id}`}>{song.title}</Link> </li>
                                        <li>#{song.genre}</li>
                                    </div>
                                </div> 
                            </div>
                            
                            <WaveformContainer index={i} song={song}/>
                            <div className="profile-song-footer">
                              {this.userLikesSongs().includes(song.id) ? 
                                <button className="profile-song-like liked" onClick={() => this.handleLike(song.id)}>
                                <FontAwesomeIcon className="like-icon" icon="heart"/>
                                  Unlike
                                </button>
                              : <button className="profile-song-like" onClick={() => this.handleLike(song.id)}>
                                <FontAwesomeIcon className="like-icon" icon="heart"/>
                                Like
                              </button> 
                              
                              }

                                {/* <button className={`profile-song-like ${this.state.liked ? "liked" : ""}`}
                                        onClick={this.handleLike}>
                                    <FontAwesomeIcon className="like-icon" icon="heart"/>
                                    Like
                                </button> */}
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
                <label className="profile-photo-label" >
                    <FontAwesomeIcon icon="camera" />
                    &nbsp;Upload Profile Image
                    <input type="file" id="fileProfile" accept="image/*" onChange={this.handlePhotoFileProfilePic}/>
                </label> 
                : <label className="profile-photo-label" >
                    <FontAwesomeIcon icon="camera" />
                    Update Image
                    <input type="file" id="fileProfile" accept="image/*" onChange={this.handlePhotoFileProfilePic}/>
                </label> ;

        const uploadProfileBannerButton = user !== currentUser ?
            null : !user.songPhoto && user === currentUser ? 
                <label className="profile-banner-label" >
                    <FontAwesomeIcon icon="camera" />
                    &nbsp;Upload Banner Image
                    <input type="file" id="fileBanner" accept="image/*" onChange={this.handlePhotoFileProfileBanner}/>
                </label> 
                : <label className="profile-banner-label" >
                    <FontAwesomeIcon icon="camera" />
                    Update Image
                    <input type="file" id="fileBanner" accept="image/*" onChange={this.handlePhotoFileProfileBanner}/>
                </label> ;

        // console.log(
        //   Object.values(this.props.userLikes)
        // )
        return (
          <div>
            <NavbarContainer />
            <div className="profile-main">
              <div className="profile-top">
                <div className="user-info">
                  {user.profileBanner ? (
                    <img
                      className="profile-banner-top"
                      src={user.profileBanner}
                    />
                  ) : null}
                  <div className="profile-pic-top-div">
                    {user.profilePicture ? (
                      <img
                        className="profile-pic-top"
                        src={user.profilePicture}
                      />
                    ) : <div className="profile-pic-top">&nbsp;</div>}
                    <li className="profile-pic-button">
                      {uploadProfilePicButton}
                    </li>
                  </div>
                  <li className="user-display-name">{user.display_name}</li>
                  <li className="profile-banner-button">
                    {uploadProfileBannerButton}
                  </li>
                </div>
              </div>
              <div className="profile-song-content">
                <div className="profile-header">
                  <li>All</li>
                </div>
                <div className="profile-song-bottom">
                  <div className="profile-recent-songs">
                    <div className="recent">Recent</div>
                    <div className="recent-songs-list">{this.songList()}</div>
                  </div>
                  <div className="profile-right-panel">
                    <div className="profile-right-panel-content">
                      <div className="profile-stats">
                        {/* <span className="followers-span">
                          <h2>Followers</h2>
                          <p>0</p>
                        </span>
                        <span className="following-span">
                          <h2>Following</h2>
                          <p>0</p>
                        </span> */}
                        <span className="tracks-span">
                          <h2>Tracks</h2>
                          <p>{user.trackIds.length}</p>
                        </span>
                      </div>
                      <div className="profile-bio">
                        <span className="bio-span">{user.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default UserShow;