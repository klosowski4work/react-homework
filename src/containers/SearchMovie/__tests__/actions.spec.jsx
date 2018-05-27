import * as actions from '../actions';
import { SEARCH_BY } from '../index';

describe('actions', () => {
    it('should create an action to search by', () => {
        const payload = SEARCH_BY.TITLE;
        const expectedAction = {
            type: actions.SEARCH_BY_ACTIONS.SEARCH_BY,
            payload
        }
        expect(actions.searchBy(payload)).toEqual(expectedAction);
    })
    
    it('should create an action to search movie', () => {
        const payload = 'Star Wars';
        const expectedAction = {
            type: actions.SEARCH_BY_ACTIONS.SEARCH,
            payload
        }
        expect(actions.search(payload)).toEqual(expectedAction);
    })
})
