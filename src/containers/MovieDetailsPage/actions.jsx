import { MoviesService } from "../../services/movies.service";

export const MOVIE_DETAILS_ACTIONS = {
    LOAD_DATA: 'movieDetails.loadData',
    LOAD_DATA_START: 'movieDetails.loadData.start',
    LOAD_DATA_SUCCESS: 'movieDetails.loadData.success',
    LOAD_DATA_ERROR: 'movieDetails.loadData.error',
}


export const loadDataStart = () => ({
    type: MOVIE_DETAILS_ACTIONS.LOAD_DATA_START
})
export const loadDataSuccess = (payload) => ({
    type: MOVIE_DETAILS_ACTIONS.LOAD_DATA_SUCCESS,
    payload,
})
export const loadDataError = () => ({
    type: MOVIE_DETAILS_ACTIONS.LOAD_DATA_ERROR
})
export function loadData(id) {
    return async dispatch => {
        dispatch(loadDataStart());
        try {
            const results = await MoviesService.getMovieDetails(id)
            dispatch(loadDataSuccess(results))
        } catch (error) {
            dispatch(loadDataError())
        }
    }
}
