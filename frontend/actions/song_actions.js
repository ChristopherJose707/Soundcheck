import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const DELETE_SONG = 'DELETE_SONG';

export const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
};

export const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
};

export const deleteSong = songId => {
    return {
        type: DELETE_SONG,
        songId
    }
};

export const fetchSongs = () => dispatch => {
    return (
        SongAPIUtil.fetchSongs()
            .then( songs => dispatch(receiveSongs(songs)))
    )
};

export const fetchSong = () => dispatch => {
    return (
        SongAPIUtil.fetchSong(songId)
            .then( song => dispatch(receiveSong(song)))
    )
};

export const createSong = () => dispatch => {
    return (
        SongAPIUtil.createSong(songData)
            .then(song => dispatch(receiveSong(song)))
    )
};

export const removeSong = (songId) => dispatch => {
    return (
        SongAPIUtil.deleteSong(songId)
            .then(() => dispatch(deleteSong(songId)))
    )
};

export const fetchUserSongs = (userId) => dispatch => {
    return (
        SongAPIUtil.userSongs(userId)
            .then( songs => dispatch(receiveSongs(songs)))
    )
};