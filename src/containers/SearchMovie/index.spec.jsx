import React from 'react';
import renderer from 'react-test-renderer';
import { SearchMovie, SEARCH_BY } from './';
import { mount, simulate } from 'enzyme';

describe('SearchMovie component', () => {

    it('should render component', () => {
        expect(renderer.create(<SearchMovie />).toJSON()).toMatchSnapshot();
    });
    it('should change state after set search by', () => {
        const wrapper = mount(<SearchMovie />);
        expect(wrapper.state('searchBy')).toBe(SEARCH_BY.TITLE);
        wrapper.find('Button[text="GENRE"]').simulate('click');
        expect(wrapper.state('searchBy')).toBe(SEARCH_BY.GENRE);
    });
    it('should be changed to genre', () => {
        const instance = mount(<SearchMovie />).instance();
        instance.searchBy(SEARCH_BY.GENRE);
        expect(instance.state.searchBy).toBe(SEARCH_BY.GENRE);
    });
    it('should be selected title', () => {
        const instance = mount(<SearchMovie />).instance();
        expect(instance.isSelected(SEARCH_BY.TITLE)).toBeTruthy();
    });
});