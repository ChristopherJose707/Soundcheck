import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import {logout} from './actions/session_actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab,
        faFacebook,
        faGoogle, 
        faGithub, 
        faLinkedin, 
        faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import {faCaretLeft,
        faEllipsisH,
        faUser, 
        faAngleDown, 
        faSearch} from '@fortawesome/free-solid-svg-icons';

import {fetchSongs} from './actions/song_actions';

library.add(
    fab,
    faFacebook,
    faGoogle,
    faSoundcloud,
    faLinkedin,
    faGithub,
    faUser, 
    faCaretLeft,
    faAngleDown, 
    faSearch, 
    faEllipsisH 
);

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser},
            },
            session: {currentUser: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    

    //test start
    window.fetchSongs = fetchSongs;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    //test end
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
})