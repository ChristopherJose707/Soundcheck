import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PlayContainer from '../music_player/play_container';
import {Link} from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mouseOnNew: null,
            mouseOnTrending: null
        }
        
        this.trendingSongs = this.trendingSongs.bind(this);
        this.newestSongs = this.newestSongs.bind(this);
    }

    componentDidMount() {
        scrollTo(0, 0)
    }



    newestSongs() {
        const { songs } = this.props;
        const newestSongs = Object.values(songs).reverse().map((song, i) => {
            let songArt = song.songPhoto ? <img src={song.songPhoto} /> : null;
            return (
                <div key={i} className="song-item">
                    <li>
                        <Link to={`/song/${song.id}`}>
                        <div className="song-art"
                            onMouseEnter={() => this.setState({mouseOnNew: song.id})}
                            onMouseLeave={() => this.setState({mouseOnNew: null})}>
                            {songArt}
                        </div>
                        <div className="song-title">
                            {song}
                        </div>
                        </Link>
                        {this.state.mouseOnNew === song.id ? 
                            <div className="discover-play"
                                onMouseEnter={() => this.setState({mouseOnNew: song.id})}
                                onMouseLeave={() => this.setState({mouseOnNew: null})}>
                                <PlayContainer songId={song.id}/>
                            </div>  : null
                        }
                    </li>
                </div>
            )
        })
    }

    trendingSongs() {

        // const trendingList = Object.values(songs).map((song, i) => {

        // })

    }

    render() {

        
        return (
            <div className="discover-parent">
                <NavbarContainer path={this.props.path} />
               <div className="discover-main">
                    <div className="discover-list">
                        <h1>SoundCheck: Trending</h1>
                        <p>Checkout what is hot on SoundCheck</p>
                    </div>
               </div>
        
               
            </div>
            
        )
    }
};

export default Discover;