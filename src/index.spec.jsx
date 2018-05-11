import React from 'react';
import renderer from 'react-test-renderer';
import './index.jsx';

import './style.scss';

jest.disableAutomock();
jest.mock('../images/net.jpg', () => 'image');

describe('Main file', () => {
    it('should render App component in "#app" container', () => {
        const component = renderer.create(<App />).toJSON()
        expect(component).toMatchSnapshot();
    });
});