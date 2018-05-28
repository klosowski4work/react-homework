import React from 'react';
import renderer from 'react-test-renderer';
import { SearchPage } from './';
import { Header } from '../Header';

jest.disableAutomock();
jest.mock('../../../images/net.jpg', () => 'image');

describe('SearchPage component', () => {
    it('should render component', () => {
        expect(renderer.create(<SearchPage />).toJSON()).toMatchSnapshot();
    });
    it('call myErrorHandler', () => {
        const instance = new SearchPage();
        instance.myErrorHandler('error', 'componentStack');
    });
});