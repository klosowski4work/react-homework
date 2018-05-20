import { SEARCH_BY } from './index';
import { SEARCH_BY_ACTIONS } from './actions';

export default (state = {
    searchBy: SEARCH_BY.TITLE,
    searchBar: '',
}, action) => {
    switch (action.type) {
        case SEARCH_BY_ACTIONS.SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload,
            };

        case SEARCH_BY_ACTIONS.SEARCH:
            return {
                ...state,
                searchBar: action.payload,
            };
        default:
            return state;
    }
};