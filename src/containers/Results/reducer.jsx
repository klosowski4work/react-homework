import { RESULTS_ACTIONS } from './actions';


export default function reducer(state = {
    results: {
        movies: [],
        limit: 0,
        offset: 0,
        total: 0,
        loading: false,
    }
}, action) {
    switch (action.type) {
        case RESULTS_ACTIONS.FETCH:
            return {
                ...state,
                results: action.payload,
            };
        case RESULTS_ACTIONS.LOAD_DATA_START:
            return {
                ...state,
                results: {
                    ...state.results,
                    loading: true,
                },
            };
        case RESULTS_ACTIONS.LOAD_DATA_SUCCESS:
            return {
                ...state,
                results: {
                    ...action.payload,
                    loading: false,
                },
            };
        case RESULTS_ACTIONS.LOAD_DATA_ERROR:
            return {
                ...state,
                results: {
                    ...state.results,
                    loading: false,
                },
            };
        default:
            return state;
    }
};