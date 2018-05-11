import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './';
import { Header } from '../Header';

jest.disableAutomock();
jest.mock('../../../images/net.jpg', () => 'image');

describe('App component', () => {
    it('should render component', () => {
        expect(renderer.create(<App />).toJSON()).toMatchSnapshot();
    });
    it('call myErrorHandler', () => {
        const instance = new App();
        instance.myErrorHandler('error', 'componentStack');
    });
});