import React from 'react';
import ModalContainer from "./modal/modal_container";
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import DiscoverContainer from './discover/discover_container';
import UploadContainer from './upload/upload_container';

const App = () => {
    return (
        <div>
            <ModalContainer />

            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <Route exact path="/discover" component={DiscoverContainer} />
                <ProtectedRoute exact path="/upload" component={UploadContainer}/>
            </Switch>
            
        </div>
    )
};

export default App