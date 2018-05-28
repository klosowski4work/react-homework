import React from 'react';
import renderer from 'react-test-renderer';
import { MovieDetails } from './';

describe('MovieDetails component', () => {
    it('should render component', () => {
        const component = renderer.create(<MovieDetails />).toJSON()
        expect(component).toMatchSnapshot();
    });
});