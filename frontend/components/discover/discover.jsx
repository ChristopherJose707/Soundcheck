import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PlayContainer from '../music_player/play_container';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Discover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mouseOnNew: null,
            mouseOnTrending: null,
            artists: null
        }
        
        this.trendingSongs = this.trendingSongs.bind(this);
        this.newestSongs = this.newestSongs.bind(this);
        this.mustListen = this.mustListen.bind(this);
    }

    componentDidUpdate() {
        if (this.state.artists === null) {
            this.mustListen()
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        scrollTo(0, 0)
    }

    mustListen() {
        
        const {users} = this.props;
        if (Object.values(users).length === 1) return null;
        
        const artists = Object.values(users)
        for(let i = 0; i < artists.length - 1; i++) {
            let ranNum = Math.floor(Math.random() * (artists.length));
            [artists[i], artists[ranNum]] = [artists[ranNum], artists[i]]
        };
        const bestArtists = artists.slice(0,3).map((artist, i) => {
            return (
                <div key={i} className="discover-must">
                    <Link to={`/users/${artist.id}`}>
                        <div className="must-img-wrapper">
                            {artist.profilePicture ? <img className="must-img" src={artist.profilePicture}></img> : null}

                        </div>
                        {artist.display_name}
                    </Link>
                </div>
            )
        })
        
        this.setState({artists: bestArtists})
    }

    newestSongs() {
        const { songs } = this.props;
        const newestSongs = Object.values(songs).reverse().map((song, i) => {
            let songArt = song.songPhoto ? <img className="song-art-img" src={song.songPhoto} /> : null;

            return (
                <div key={i} className="song-item">
                    <li>
                        <div className="song-art-div" onMouseEnter={() => this.setState({mouseOnNew: song.id})}
                           onMouseLeave={() => this.setState({mouseOnNew: null})}>
                            <Link to={`/song/${song.id}`}>{songArt}</Link>
                        </div>
                        <div className="song-item-title">
                            {song.title}
                        </div>
                        {this.state.mouseOnNew === song.id ?
                             <div className="discover-play"
                                 onMouseEnter={() => this.setState({mouseOnNew: song.id})}
                                 onMouseLeave={() => this.setState({mouseOnNew: null})}>
                                 <PlayContainer songId={song.id}/>
                             </div>  : null
                        }
                        <Link className="song-item-artist" to={`/users/${song.user_id}`}>
                            {song.artist}
                        </Link>
                    </li>
                </div>
            )
        })
        return newestSongs
    }

     trendingSongs() {
        const { songs } = this.props;
        const trendingSongs = Object.values(songs).map((song, i) => {
            let songArt = song.songPhoto ? <img className="song-art-img" src={song.songPhoto} /> : null;

            return (
                <div key={i} className="song-item">
                    <li>
                        <div className="song-art-div" onMouseEnter={() => this.setState({mouseOnTrending: song.id})}
                           onMouseLeave={() => this.setState({mouseOnTrending: null})}>
                            <Link to={`/song/${song.id}`}>{songArt}</Link>
                        </div>
                        <div className="song-item-title">
                            {song.title}
                        </div>
                        {this.state.mouseOnTrending === song.id ?
                             <div className="discover-play"
                                 onMouseEnter={() => this.setState({mouseOnTrending: song.id})}
                                 onMouseLeave={() => this.setState({mouseOnTrending: null})}>
                                 <PlayContainer songId={song.id}/>
                             </div>  : null
                        }
                        <Link className="song-item-artist" to={`/users/${song.user_id}`}>
                            {song.artist}
                        </Link>
                    </li>
                </div>
            )
        })
        return trendingSongs
    }
    
    render() {

          return (
            <div className="discover-parent">
              <NavbarContainer path={this.props.path} />
              <div className="discover-main">
                <div className="discover-list">
                  <h1>SoundCheck: New</h1>
                  <p>Checkout the newest tracks on SoundCheck</p>
                  <div className="discover-new">
                    <ul>{this.newestSongs()}</ul>
                  </div>
                </div>
                <div className="discover-list">
                  <h1>Trending Now</h1>
                  <p>Top tracks on Soundcheck</p>
                  <div className="discover-trending">
                    <ul>{this.trendingSongs()}</ul>
                  </div>
                </div>
              </div>
              <div className="discover-side">
                <div className="discover-side-header">
                  <FontAwesomeIcon icon="users" />
                  <p>Must Listen Artists</p>
                </div>
                <ul className="discover-side-ul">{this.state.artists}</ul>
              </div>
            </div>
          );
    }
};

export default Discover;