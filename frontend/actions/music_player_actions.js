export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_PREVIOUS_SONG = "RECEIVE_PREVIOUS_SONG";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_RANDOM_SONGS = "RECEIVE_RANDOM_SONGS"

export const playSong = () => {
    return ({
        type: PLAY_SONG,
    })
};

export const pauseSong = () => {
    return ({
        type: PAUSE_SONG
    })
};

export const receiveCurrentSong = (songId) => {
    return ({
        type: RECEIVE_CURRENT_SONG,
        songId
    })
};

export const receivePreviousSong = (songId) => {
    return ({
        
    })
}

export const receiveNextSong = (songId) => {
    return ({
        type: RECEIVE_NEXT_SONG,
        songId
    })
};

export const receiveRandomSongs = songs => {
    return ({
        type: RECEIVE_RANDOM_SONGS,
        songs
    })
}