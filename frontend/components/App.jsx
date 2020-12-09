import React from 'react';
import ModalContainer from "./modal/modal_container";
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container';
import DiscoverContainer from './discover/discover_container';


const App = () => {
    return (
        <div>
            <ModalContainer />

            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <Route exact path="/discover" component={DiscoverContainer} />
            </Switch>
            
        </div>
    )
};

export default App