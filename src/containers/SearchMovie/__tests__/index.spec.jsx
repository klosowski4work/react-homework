import React from 'react';
import renderer from 'react-test-renderer';
import { SearchMovie, SEARCH_BY } from './';
import { mount, simulate } from 'enzyme';
import { SORT_BY } from '../SortBy';
import configureStore from 'redux-mock-store';

let store;
let wrapper;

const initialState = {
    sort: {
        sortBy: SORT_BY.RELEASE_DATA,
    },
    searchMovie: {
        searchBy: SEARCH_BY.TITLE,
        searchBar: ''
    }
}

describe('SearchMovie component', () => {
    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
        wrapper = mount(<SearchMovie store={store} />)
    });
    it('should render component', () => {
        expect(renderer.create(<SearchMovie store={store} />).toJSON()).toMatchSnapshot();
    });
    it('should change state after set search by', () => {
        expect(wrapper.state('searchBy')).toBe(SEARCH_BY.TITLE);
        wrapper.find('Button[text="GENRE"]').simulate('click');
        expect(wrapper.state('searchBy')).toBe(SEARCH_BY.GENRE);
    });
    it('should be changed to genre', () => {
        const instance = wrapper.instance();
        instance.searchBy(SEARCH_BY.GENRE);
        expect(instance.state.searchBy).toBe(SEARCH_BY.GENRE);
    });
    it('should be selected title', () => {
        const instance = wrapper.instance();
        expect(instance.isSelected(SEARCH_BY.TITLE)).toBeTruthy();
    });
});