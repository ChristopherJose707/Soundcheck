import React from 'react';
import ModalContainer from "./modal/modal_container";
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import DiscoverContainer from './discover/discover_container';
import UploadContainer from './upload/upload_container';
import SongShowContainer from './song/song_show_container';
import MusicPlayerContainer from './music_player/music_player_container';



class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ModalContainer />
    
                <Switch>
                    <AuthRoute exact path="/" component={SplashContainer} />
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/upload" component={UploadContainer}/>
                    <ProtectedRoute exact path="/song/:songId" component={SongShowContainer} />
    
                </Switch>
                
                <MusicPlayerContainer />
            </div>
        )
    }
};

export default App