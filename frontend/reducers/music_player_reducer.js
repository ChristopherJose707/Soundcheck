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
    randomSongs: [], // songId
    previousPlayed: [] // songId
}

const musicPlayerReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_RANDOM_SONGS: 
            const songs = Object.values(action.songs);
            for(let i = 0; i < songs.length - 1; i++) {
                let ranNum = Math.floor(Math.random() * (songs.length));
                [songs[i], songs[ranNum]] = [songs[ranNum], songs[i]]
            };
            songs.forEach(song => {
                nextState.randomSongs.push(song.id)
            })
            console.log(nextState);
            return nextState;
        case PLAY_SONG:
            nextState.playing = true;
            return nextState;
        case PAUSE_SONG:
            nextState.playing = false;
            return nextState;
        case RECEIVE_CURRENT_SONG:
            nextState.currentSongId = action.songId;
            return nextState;
        case RECEIVE_PREVIOUS_SONG:
            if (!nextState.previousPlayed.includes(action.songId)) {
                nextState.previousPlayed.push(action.songId)
            };
            return nextState;
        case RECEIVE_NEXT_SONG: 
            nextState.randomSongs.unshift(action.songId);
            return nextState;
        default:
            return oldState;
    }
}

export default musicPlayerReducer;