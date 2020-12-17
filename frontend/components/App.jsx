import React from 'react';
import ModalContainer from "./modal/modal_container";
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import DiscoverContainer from './discover/discover_container';
import UploadContainer from './upload/upload_container';
import SongShowContainer from './song/song_show_container';
import MusicPlayerContainer from './music_player/music_player_container';
import UserShowContainer from './user_show/user_show_container';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ModalContainer />
    
                <Switch>
                    <Route exact path="/users/:userId" component={UserShowContainer} />
                    <ProtectedRoute exact path="/song/:songId" component={SongShowContainer} />
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/upload" component={UploadContainer}/>
                    <AuthRoute exact path="/" component={SplashContainer} />
                </Switch>
                
                <MusicPlayerContainer />
            </div>
        )
    }
};

export default App