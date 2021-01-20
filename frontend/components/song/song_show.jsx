import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';
import {uploadTime} from '../../util/upload_time_util';
import PlayContainer from '../music_player/play_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SongShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authorID: "",
            commentID: "",
            commentBody: "",
            liked: false
        }

        this.handleComment = this.handleComment.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.commentIndex = this.commentIndex.bind(this);
        this.handleLike = this.handleLike.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
        this.props.fetchUsers();
        this.props.fetchComments();
        scrollTo(0, 0)
    }

    handleLike() {
        if (this.state.liked) {
            this.setState({liked: false})
        } else {
            this.setState({liked: true})
        }
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
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

    handleComment(e) {
        e.preventDefault();

        const comment = {
            song_id: this.props.song.id,
            author_id: this.props.currentUser.id,
            body: this.state.commentBody
        };
        this.setState({commentBody: ""});
        this.props.createComment(comment);
    }

    allComments() {
        let comments = Object.values(this.props.comments).reverse();
        let filtered = comments.filter(comment => comment.song_id === this.props.song.id )
        let allComments = filtered.map((comment, i) => {
            return (
                <div key={i} className="comment-main" 
                    onMouseOver={()=> this.setState({authorID: comment.author_id, commentID: comment.id })}
                    onMouseLeave={()=> this.setState({authorID: null, commentID: null })}>

                    <div className="comment-photo-div"><Link to={`/users/${comment.author_id}`}>
                        {this.props.users[comment.author_id].profilePicture ? <img className="comment-photo" src={this.props.users[comment.author_id].profilePicture}/> : null}
                    </Link></div>
                    <div className="comment-content">
                        <div className="comment-header">
                            {this.props.currentUser.id === comment.author_id ? "You" 
                            : <Link to={`/users/${comment.author_id}`}>{this.props.users[comment.author_id]}</Link>}
                            <span className="comment-time">{uploadTime(comment.created_at)}</span>
                        </div>
                        <div className="comment-body">
                            <span className="comment-span">{comment.body}</span>
                            {this.props.currentUser.id === this.state.authorID && comment.id === this.state.commentID ? 
                                <span className="delete-span"><button className="comment-delete-btn" onClick={() => this.props.deleteComment(comment.id)}>
                                    <FontAwesomeIcon icon="dumpster-fire" />
                                </button></span> : null
                            }
                        </div>
                        {/* <div className="comment-delete">
                            {this.props.currentUser.id === this.state.authorID && comment.id === this.state.commentID ? 
                                <button onClick={() => this.props.deleteComment(comment.id)}>
                                    <FontAwesomeIcon icon="dumpster-fire" />
                                </button> : null
                            }
                        </div> */}
                    </div>
                </div>
            )
        })
        
        return allComments;
    }

    commentIndex() {
        const allComments = this.allComments();
        const index = Object.values(this.props.comments).length > 0 ?
            <div className="comment-index-wrapper">
                <div className="comment-index-header">
                    <FontAwesomeIcon icon="comment" />
                    {allComments.length} {allComments.length === 1 ? "comment" : "comments"}
                </div>
                <div className="comment-list">
                    {allComments}
                </div>
            </div> : null
        
        return index;
    }

    render () {
        const {users, song, currentUser} = this.props;
        if (Object.keys(this.props.users).length === 1) {
            return null
        };

        if (!this.props.song || !this.props.users) {
            return null
        };
        
        const songPhoto = song.songPhoto ? 
            <img className="song-show-photo" src={song.songPhoto} /> : null

        const artistPhoto = users[song.user_id].profilePicture ?
            <img className="song-show-photo-artist" src={users[song.user_id].profilePicture} /> : null

        const uploadPhotoButton = (song.artist !== currentUser.display_name) ? 
            null : !song.songPhoto && song.artist === currentUser.display_name ? 
            <label className="upload-photo-label-show" >
                <FontAwesomeIcon icon="camera"/>Upload Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </label> 
            : 
             <label className="upload-photo-label-show" >
                <FontAwesomeIcon icon="camera"/>Update Image
                <input type="file" id="file" accept="image/*" onChange={this.handlePhotoFile}></input>
            </label> ;

        const deleteButton = (song.artist !== currentUser.display_name) ? null 
            : <button className="song-delete" onClick={() => this.handleDelete()}>Delete Track</button>

        
        return (
            <div className="song-show-page">
                <NavbarContainer />
                <div className="song-banner">
                    <div className="song-show-play">
                        <PlayContainer songId={song.id} />
                    </div>
                    <div className="song-banner-info">
                        <div className="song-banner-top">
                            <h2 className="song-banner-artist"><Link to={`/users/${song.user_id}`}>{song.artist}</Link></h2>
                            <h3 className="song-banner-created-at">{uploadTime(song.created_at)}</h3>
                        </div>
                        <div className="song-banner-bottom">
                            <h1 className="song-banner-title">{song.title}</h1>
                            <h3 className="song-banner-genre">#{song.genre}</h3>
                        </div>
                    </div>
                    <div className="song-banner-photo">{songPhoto}{uploadPhotoButton}</div>
                </div>

                <div className="comments-form-parent">
                    <div className="comments-form-wrapper">
                        <div className="current-user-photo-form">
                            {currentUser.profilePicture ? <img src={currentUser.profilePicture}/> : null}
                        </div>
                        <form className="comment-form" onSubmit={this.handleComment}>
                            <input id="input-comment" type="text"
                                value={this.state.commentBody}
                                onChange={this.handleInput('commentBody')}
                                placeholder="Write a comment"
                            />
                        </form>
                        
                    </div>
                </div>
                <div className="song-show-buttons">
                    <button className={`profile-song-like ${this.state.liked ? "liked" : ""}`}
                        onClick={this.handleLike}><FontAwesomeIcon className="like-icon" icon="heart"/>
                        Like
                    </button>
                    <span className="show-dropdown">
                        <button onClick={() => this.handleDropdown()} className="dropbtn">More<FontAwesomeIcon className="song-show-ellipsis" icon="ellipsis-h" /></button>
                        <ul id="show-dropdown-id" className="show-dropdown-content">
                            {deleteButton}
                            <li>Nothing here yet!</li>
                        </ul>
                    </span>
                </div>
                <div className="comments-index-main">
                    <div className="artist-left-comments">
                        {artistPhoto}
                        <p>{song.artist}</p>
                    </div>
                    <div className="comment-index-song-desc">
                        <div className="comments-desc">
                            <div className="song-description">
                                {song.description}
                            </div>
                            {this.commentIndex()}
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default SongShow;