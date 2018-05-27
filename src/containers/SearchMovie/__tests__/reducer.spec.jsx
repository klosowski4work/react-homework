import { SEARCH_BY } from '../index';

describe('sortBy reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([
            {
                searchBy: SEARCH_BY.TITLE,
                searchBar: '',
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