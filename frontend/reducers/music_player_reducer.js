import {
        PLAY_SONG,
        PAUSE_SONG,
        RECEIVE_CURRENT_SONG,
        RECEIVE_PREVIOUS_SONG,
        RECEIVE_NEXT_SONG,
        RECEIVE_RANDOM_SONGS
} from '../actions/music_player_actions';

const defaultState = {
    playing: false,
    currentSongId: null,
    randomSongs: [],
    previousPlayed: []
}

const musicPlayerReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    nextState = Object.assign({}. oldState)
    switch(action.type) {
        case PLAY_SONG:
            return newState.playing = true;
        case PAUSE_SONG:
            return newState.playing = false;
        case RECEIVE_CURRENT_SONG:
            return nextState.currentSongId = action.songId;
        case RECEIVE_PREVIOUS_SONG:
            return 
        default:
            return oldState;
    }
}

export default musicPlayerReducer;