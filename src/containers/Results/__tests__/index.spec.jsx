import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Results } from './';

let store;
let wrapper;

const initialState = {
    results: {
        results: {
            movies: [],
            limit: 0,
            offset: 0,
            total: 0,
            loading: false,
        }
    }
}

describe('Results component', () => {
    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
    });
    it('should render component', () => {
        const component = renderer.create(<Results store={store} />).toJSON()
        expect(component).toMatchSnapshot();
    });
});