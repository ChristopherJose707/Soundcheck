import React from 'react';
import ModalContainer from "./modal/modal_container";
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return (
        <div>
            <ModalContainer />
            <h1>Soundcheck! React works!</h1>

            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                
            </Switch>
            
        </div>
    )
};

export default App