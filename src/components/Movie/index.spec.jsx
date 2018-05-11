import React from 'react';
import { mount } from 'enzyme';
import { Movie } from './';

describe('Movie component', () => {
    it('should render component', () => {
        const wrapper = mount(<Movie title="test movie" release-date="2018" type="scientific film" />);
        expect(wrapper).toMatchSnapshot();
    });
});