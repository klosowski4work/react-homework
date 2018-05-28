import { MOVIE_DETAILS_ACTIONS } from './actions';


export default function reducer(state = {
    movie: {},
    loading: false,
}, action) {
    switch (action.type) {
        case MOVIE_DETAILS_ACTIONS.LOAD_DATA_START:
            return {
                ...state,
                movie: {
                    ...state.movie,
                    loading: true,
                },
            };
        case MOVIE_DETAILS_ACTIONS.LOAD_DATA_SUCCESS:
            return {
                ...state,
                movie: {
                    ...action.payload,
                    loading: false,
                },
            };
        case MOVIE_DETAILS_ACTIONS.LOAD_DATA_ERROR:
            return {
                ...state,
                movie: {
                    ...state.movie,
                    loading: false,
                },
            };
        default:
            return state;
    }
};