import { sortBy, SORT_BY_ACTIONS } from './actions';
import { SORT_BY } from './index';
import { reducer } from './reducer';

describe('actions', () => {
    it('should create an action to sort by', () => {
        const payload = SORT_BY.RELEASE_DATA;
        const expectedAction = {
            type: SORT_BY_ACTIONS.SORT_BY,
            payload
        }
        expect(sortBy(payload)).toEqual(expectedAction)
    })
})

describe('sortBy reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([
            {
                sortBy: SORT_BY.RELEASE_DATA,
            }
        ])
    })

    it('should handle change sort by', () => {
        expect(
            reducer(undefined, {
                type: SORT_BY_ACTIONS.SORT_BY,
                sortBy: SORT_BY.RELEASE_DATA
            })
        ).toEqual([
            {
                type: SORT_BY_ACTIONS.SORT_BY,
                sortBy: SORT_BY.RELEASE_DATA
            }
        ])
    })
})