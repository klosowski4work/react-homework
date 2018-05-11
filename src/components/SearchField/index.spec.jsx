import React from 'react';
import { render } from 'enzyme';
import { SearchField } from './';

describe('SearchField component', () => {
    it('should render component', () => {
        const wrapper = render(<SearchField />);
        expect(wrapper).toMatchSnapshot();
    });
});