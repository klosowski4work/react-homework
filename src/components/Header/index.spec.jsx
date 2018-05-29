import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './';

import './style.scss';

jest.disableAutomock();
jest.mock('../../../images/net.jpg', () => 'image');

describe('Header component', () => {
    it('should render component', () => {
        const component = renderer.create(<Header />).toJSON()
        expect(component).toMatchSnapshot();
    });
});