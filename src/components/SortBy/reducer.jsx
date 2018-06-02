import { SORT_BY } from './index';
import { SORT_BY_ACTIONS } from './actions';

export default function reducer(state = {
    sortBy: SORT_BY.RELEASE_DATA,
}, action) {
    switch (action.type) {
        case SORT_BY_ACTIONS.SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            };
        default:
            return state;
    }
};