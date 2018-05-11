import React from 'react';
import renderer from 'react-test-renderer';
import { Results } from './';

describe('Results component', () => {
    it('should render component', () => {
        const component = renderer.create(<Results />).toJSON()
        expect(component).toMatchSnapshot();
    });
});