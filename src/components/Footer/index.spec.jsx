import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './';

describe('Footer component', () => {
    it('should render component', () => {
        const component = renderer.create(<Footer />).toJSON()
        expect(component).toMatchSnapshot();
    });
});