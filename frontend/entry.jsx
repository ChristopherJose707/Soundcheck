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
        faPlay,
        faDumpsterFire,
        faUsers,
        faHeart,
        faVolumeUp,
        faComment,
        faPause,
        faStepBackward,
        faVolumeDown,
        faStepForward,
        faVolumeMute,
        faEllipsisH,
        faCamera,
        faUser,
        faExternalLinkAlt, 
        faAngleDown, 
        faSearch} from '@fortawesome/free-solid-svg-icons';

import {fetchSongs, fetchSong, fetchUserSongs, removeSong} from './actions/song_actions';
import {fetchUsers, fetchUser, updateUser} from './actions/user_actions';
import {fetchComments, createComment, deleteComment} from './actions/comment_actions';
library.add(
    fab,
    faPlay,
    faDumpsterFire,
    faPause,
    faHeart,
    faComment,
    faUsers,
    faStepForward,
    faStepBackward,
    faFacebook,
    faCamera,
    faVolumeUp,
    faVolumeDown,
    faVolumeMute,
    faExternalLinkAlt,
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
        window.fetchComments = fetchComments;
        window.createComment = createComment;
        window.deleteComment = deleteComment;
    // window.fetchUsers = fetchUsers;
    // window.fetchUser = fetchUser;
    // window.updateUser = updateUser;
    // window.removeSong = removeSong;
    // window.fetchUserSongs = fetchUserSongs;
    window.fetchSong = fetchSong;
    // window.fetchSongs = fetchSongs;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    //test end
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
})