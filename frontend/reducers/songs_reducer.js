import {RECEIVE_SONGS, RECEIVE_SONG, DELETE_SONG} from '../actions/song_actions';

const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return Object.assign({}, oldState, {[action.song.id]: action.song});
        case DELETE_SONG:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.songId];
            return nextState;
        default:
            return oldState;
    }
};

export default songsReducer;

