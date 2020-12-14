export const userSongs = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/songs`,
        method: 'GET'
    })
}

export const fetchSongs = () => {
    return $.ajax ({
        url: '/api/songs',
        method: 'GET'
    })
};

export const fetchSong = (songId) => {
    return $.ajax ({
        url: `/api/songs/${songId}`,
        method: "GET"
    })
};

export const createSong = (songData) => {
    return $.ajax ({
        url: '/api/songs',
        method: 'POST',
        data: songData,
        contentType: false,
        processData: false
    })
};

export const updateSong = (songData, songId) => {
    return $.ajax ({
        url: `/api/songs/${songId}`,
        method: 'PATCH',
        data: songData,
        contentType: false,
        processData: false
    })
};

export const deleteSong = (songId) => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE'
    })
}
