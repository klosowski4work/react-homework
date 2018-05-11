import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render, simulate } from 'enzyme';
import { Logo } from './';

describe('Logo component', () => {
    const wrapper = shallow(<Logo />);
    it('create component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('click event', () => {
        expect(wrapper.find('span').text()).toBe('netflixroulette');
    });
});