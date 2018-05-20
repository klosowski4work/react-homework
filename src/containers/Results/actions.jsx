import { MoviesService } from "../../services/movies.service";

export const RESULTS_ACTIONS = {
    FETCH: 'results.fetch',
    LOAD_DATA: 'results.loadData',
    LOAD_DATA_START: 'results.loadData.start',
    LOAD_DATA_SUCCESS: 'results.loadData.success',
    LOAD_DATA_ERROR: 'results.loadData.error',
}

export const fetch = () => ({
    type: RESULTS_ACTIONS.FETCH,
    payload: 'searchBy'
});

export const loadDataStart = () => ({
    type: RESULTS_ACTIONS.LOAD_DATA_START
})
export const loadDataSuccess = (payload) => ({
    type: RESULTS_ACTIONS.LOAD_DATA_SUCCESS,
    payload,
})
export const loadDataError = () => ({
    type: RESULTS_ACTIONS.LOAD_DATA_ERROR
})
export function loadData(params) {
    return async dispatch => {
        dispatch(loadDataStart());
        try {
            const results = await MoviesService.getMovies(params)
            dispatch(loadDataSuccess(results))
        } catch (error) {
            dispatch(loadDataError())
        }
    }
}
