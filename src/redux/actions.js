export const SEARCH_GIFS_REQUEST = 'SEARCH_GIFS_REQUEST';
export const SEARCH_GIFS_SUCCESS = 'SEARCH_GIFS_SUCCESS';
export const SEARCH_GIFS_FAILURE = 'SEARCH_GIFS_FAILURE';

// Action creators
export const searchGifsRequest = query => ({
    type: SEARCH_GIFS_REQUEST,
    payload: query,
});

export const searchGifsSuccess = gifs => ({
    type: SEARCH_GIFS_SUCCESS,
    payload: gifs,
});

export const searchGifsFailure = error => ({
    type: SEARCH_GIFS_FAILURE,
    payload: error,
});