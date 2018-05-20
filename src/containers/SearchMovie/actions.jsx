export const SEARCH_BY_ACTIONS = {
    SEARCH_BY: 'searchMovie.searchBy',
    SEARCH: 'searchMovie.search',
}

export const searchBy = (searchBy) => ({
    type: SEARCH_BY_ACTIONS.SEARCH_BY,
    payload: searchBy
});

export const search = (search) => ({
    type: SEARCH_BY_ACTIONS.SEARCH,
    payload: search
});